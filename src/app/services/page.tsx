'use client';

import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Какво искаш да оптимизираш?
          </h1>
          <p className="text-xl text-slate-600">
            Избери услугата и получи персонализирана оценка на възможната икономия.
          </p>
        </div>

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
    </div>
  );
}
