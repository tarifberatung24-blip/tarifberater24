'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Service } from '@/types';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function LeadCapture() {
  const searchParams = useSearchParams();
  const service = (searchParams.get('service') || 'electricity') as Service;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gdprConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Въведи валидно име';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Въведи валиден имейл адрес';
    }

    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Въведи валиден телефонен номер';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Трябва да приемеш условията на приватност';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrors({ form: 'Възникна грешка при изпращане на формуляра. Моля, опитай отново.' });
      }
    } catch (error) {
      setErrors({ form: 'Възникна грешка. Моля, опитай отново.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Благодаря!
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            Получихме твоята информация. Един от нашите специалисти ще се свържи с теб в най-скоро време за да обсудим персонализирани оферти.
          </p>
          <p className="text-sm text-slate-500">
            Очакван отговор: 1-2 работни дни
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Получи точни оферти
          </h1>
          <p className="text-lg text-slate-600">
            Въведи твоята информация и ми ще те свържем с най-добрите доставчици.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-lg">
          {errors.form && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              {errors.form}
            </div>
          )}

          <Input
            label="Пълно име"
            name="name"
            type="text"
            placeholder="Иван Петров"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <Input
            label="Имейл адрес"
            name="email"
            type="email"
            placeholder="ivan@example.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <Input
            label="Телефонен номер"
            name="phone"
            type="tel"
            placeholder="+49 123 456789"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />

          <div className="bg-white p-4 border border-slate-200 rounded-lg">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="gdprConsent"
                checked={formData.gdprConsent}
                onChange={handleInputChange}
                className="mt-1 mr-3 w-5 h-5 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <span className="text-sm text-slate-700">
                Съгласен съм с{' '}
                <a href="/privacy" className="text-slate-900 font-semibold hover:underline">
                  политиката на приватност
                </a>{' '}
                и обработката на моите персонални данни.
              </span>
            </label>
            {errors.gdprConsent && (
              <p className="text-sm text-red-500 mt-2">{errors.gdprConsent}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Изпращане...' : 'Изпрати моята информация'}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Твоите данни са защитени и се използват само за да получиш оферти от доставчици.
          </p>
        </form>
      </div>
    </div>
  );
}
