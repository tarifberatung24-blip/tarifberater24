export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Политика на приватност
        </h1>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              1. Вводни положения
            </h2>
            <p>
              Tarifberater24 се запълва на защитата на твоята приватност. Тази политика описва как събираме, използваме и защитаваме твоите персонални данни в съответствие с GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              2. Събиране на данни
            </h2>
            <p>Събираме следните персонални данни:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Пълно име</li>
              <li>Имейл адрес</li>
              <li>Телефонен номер</li>
              <li>Пощенски код</li>
              <li>Информация за текущите договори (месячни разходи)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              3. Използване на данни
            </h2>
            <p>Твоите данни се използват само за:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Изчисляване на възможната икономия</li>
              <li>Свързване с подходящи доставчици</li>
              <li>Контакт с теб относно оферти</li>
              <li>Подобряване на нашите услуги</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              4. Защита на данни
            </h2>
            <p>
              Твоите данни се съхраняват на защитени сървъри и не се делят с трети страни без твоето изрично съгласие.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              5. Твоите права
            </h2>
            <p>Имаш право да:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получиш копие на твоите персонални данни</li>
              <li>Поправиш или актуализираш твоите данни</li>
              <li>Изтриеш своите данни</li>
              <li>Откажеш обработката на твоите данни</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              6. Контакт
            </h2>
            <p>
              Ако имаш въпроси относно твоята приватност, моля свържи се с нас на:
              <br />
              Email: privacy@tarifberater24.de
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
