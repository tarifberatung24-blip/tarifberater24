export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Tarifberater24</h3>
            <p className="text-slate-400 text-sm">
              Помагаме на българи в Германия да спестяват пари от своите договори.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/calculator/electricity" className="hover:text-white transition-colors">Ток</a></li>
              <li><a href="/calculator/gas" className="hover:text-white transition-colors">Газ</a></li>
              <li><a href="/calculator/internet" className="hover:text-white transition-colors">Интернет</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Правни документи</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Политика на приватност</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Условия на ползване</a></li>
              <li><a href="/imprint" className="hover:text-white transition-colors">Впечатление</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 Tarifberater24. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
