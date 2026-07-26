import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TB</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">Tarifberater24</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 transition-colors">
              Начало
            </Link>
            <Link href="#how" className="text-slate-700 hover:text-slate-900 transition-colors">
              Как работи
            </Link>
            <Link href="#faq" className="text-slate-700 hover:text-slate-900 transition-colors">
              Въпроси
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
