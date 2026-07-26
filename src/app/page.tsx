'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: 'accuracy',
      question: 'Колко точни са вашите изчисления?',
      answer: 'Нашите изчисления се основават на средните цени на немския пазар. Точните цени варират в зависимост от конкретния доставчик и региона. Препоръчваме ви да проверите директно с доставчиците за окончателни оферти.',
    },
    {
      id: 'cost',
      question: 'Колко струва услугата?',
      answer: 'Услугата е напълно безплатна за вас. Ние получаваме комисионни от доставчиците когато завършите превключване на договор.',
    },
    {
      id: 'switching',
      question: 'Как действа превключването?',
      answer: 'След като изпратите информацията си, свързваме ви с подходящи доставчици. Те разговарят директно с вас относно условията. Всички административни работи се справят между вас и новия доставчик.',
    },
    {
      id: 'privacy',
      question: 'Защитени ли са моите данни?',
      answer: 'Да, вашите данни се защитават в съответствие със GDPR. Не делим вашите данни с трети страни без вашето съгласие.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Спести пари от договорите си в Германия
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Помагаме на българи в Германия да намерят по-добри условия за ток, газ и интернет. Просто въведи информацията си и открий възможните икономии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg">
                  Провери моята възможна икономия
                </Button>
              </Link>
              <Button size="lg" variant="secondary">
                Научи повече
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Как работи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Избери услуга', description: 'Ток, газ или интернет' },
              { number: '2', title: 'Въведи информацията', description: 'Пощенски код и месячни разходи' },
              { number: '3', title: 'Получи предложение', description: 'Виж възможните икономии' },
              { number: '4', title: 'Свържи се', description: 'Получи контакт с доставчици' },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="⚡"
              title="Ток"
              description="Сравни цени на ток от различни доставчици и спести на месечните си разходи."
              link="/calculator/electricity"
            />
            <ServiceCard
              icon="🔥"
              title="Газ"
              description="Намери най-добрите условия за газоснабдяване в твоята област."
              link="/calculator/gas"
            />
            <ServiceCard
              icon="🌐"
              title="Интернет"
              description="Получи по-бърза интернет с по-ниска цена. Сравни всички доставчици."
              link="/calculator/internet"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Защо ни доверяй
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Безплатно',
                description: 'Услугата е напълно безплатна за тебе. Ние печелим от комисионни.',
              },
              {
                icon: '🔒',
                title: 'Защита на данни',
                description: 'Твоите данни се защитават според GDPR. Конфиденциалност е приоритет.',
              },
              {
                icon: '⚡',
                title: 'Бързо',
                description: 'Получи резултати в минути. Никой не е трябвало да чакаме.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Често задавани въпроси
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors flex justify-between items-center"
                >
                  {faq.question}
                  <span className={`text-2xl transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 py-4 border-t border-slate-200 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Готов ли си да спестиш пари?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Започни сега. Най-добрата икономия е чакаща.
          </p>
          <Link href="/services">
            <Button size="lg">
              Провери моята възможна икономия
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
