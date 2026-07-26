export default function Imprint() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Впечатление
        </h1>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Отговорен издател
            </h2>
            <div className="space-y-2">
              <p>Tarifberater24</p>
              <p>Email: info@tarifberater24.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Отговорност за съдържание
            </h2>
            <p>
              Материалите на нашия уебсайт са предоставени с добра вяра. Ако забележиш некоректна информация, моля свържи се с нас, за да коригираме.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Отговорност за линкове
            </h2>
            <p>
              Ние не сме отговорни за съдържанието на външни уебсайтове, към които водят линки от нашия сайт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Авторски права
            </h2>
            <p>
              Всички материали на този уебсайт са защитени с авторско право. Забранено е копирането, разпространението или публикуването на материали без писменото разрешение на Tarifberater24.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Дати на страницата
            </h2>
            <p>
              Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
