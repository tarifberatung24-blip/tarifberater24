'use client';

import { useState } from 'react';
import { Service, CalculatorInputs, CalculatorResult } from '@/types';
import { calculateSavings } from '@/services/calculator';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

interface CalculatorProps {
  service: Service;
  title: string;
  icon: string;
  description: string;
}

export default function Calculator({
  service,
  title,
  icon,
  description,
}: CalculatorProps) {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [formData, setFormData] = useState<Partial<CalculatorInputs>>({
    service,
    postcode: '',
    householdSize: 2,
    currentMonthlyPayment: 0,
    estimatedConsumption: undefined,
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'householdSize' || name === 'currentMonthlyPayment' || name === 'estimatedConsumption' || name === 'currentSpeed'
        ? parseFloat(value)
        : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.postcode || formData.postcode.length < 4) {
      newErrors.postcode = 'Въведи валиден пощенски код';
    }
    if (!formData.householdSize || formData.householdSize < 1) {
      newErrors.householdSize = 'Въведи валиден брой на членове';
    }
    if (!formData.currentMonthlyPayment || formData.currentMonthlyPayment <= 0) {
      newErrors.currentMonthlyPayment = 'Въведи валиден месячен разход';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (formData.service && formData.postcode && formData.householdSize && formData.currentMonthlyPayment) {
      const calculatorResult = calculateSavings(formData as CalculatorInputs);
      setResult(calculatorResult);
      setStep('result');
    }
  };

  if (step === 'result' && result) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{icon}</div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Отличен! Твоята възможна икономия:
              </h1>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200">
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  {result.estimatedAnnualSavings}€
                </div>
                <p className="text-lg text-slate-600 mb-4">
                  на година
                </p>
                <p className="text-xl font-semibold text-slate-900">
                  {result.percentageSavings}% икономия
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Препоръки:</h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span className="text-slate-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-600 mb-6 text-center">
                За да получиш точни оферти и да се свържеш с доставчици, моля въведи своята информация.
              </p>

              <Link href={`/lead-capture?service=${service}`}>
                <Button size="lg" className="w-full mb-4">
                  Получи точни оферти
                </Button>
              </Link>

              <button
                onClick={() => {
                  setStep('form');
                  setResult(null);
                }}
                className="w-full text-slate-700 hover:text-slate-900 transition-colors"
              >
                Изчисли отново
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {title}
          </h1>
          <p className="text-lg text-slate-600">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-lg">
          <Input
            label="Пощенски код"
            name="postcode"
            type="text"
            placeholder="12345"
            value={formData.postcode}
            onChange={handleInputChange}
            error={errors.postcode}
            required
          />

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Брой членове в домакинството <span className="text-red-500">*</span>
            </label>
            <select
              name="householdSize"
              value={formData.householdSize}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.householdSize && (
              <p className="text-sm text-red-500 mt-1">{errors.householdSize}</p>
            )}
          </div>

          <Input
            label="Месячна сметка (€)"
            name="currentMonthlyPayment"
            type="number"
            step="0.01"
            placeholder="50"
            value={formData.currentMonthlyPayment}
            onChange={handleInputChange}
            error={errors.currentMonthlyPayment}
            required
          />

          {service === 'electricity' && (
            <Input
              label="Прогнозна годишна консумация (kWh)"
              name="estimatedConsumption"
              type="number"
              placeholder="2500"
              value={formData.estimatedConsumption || ''}
              onChange={handleInputChange}
            />
          )}

          {service === 'internet' && (
            <Input
              label="Текуща скорост (Mbps)"
              name="currentSpeed"
              type="number"
              placeholder="100"
              value={formData.currentSpeed || ''}
              onChange={handleInputChange}
            />
          )}

          <Button type="submit" size="lg" className="w-full">
            Изчисли моята икономия
          </Button>
        </form>

        <p className="text-sm text-slate-500 text-center mt-6">
          Изчисленията са приблизителни и се основават на средните цени на пазара.
          Точните цени варират в зависимост от доставчика.
        </p>
      </div>
    </div>
  );
}
