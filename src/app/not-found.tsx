import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          Страницата, която търсиш, не съществува.
        </p>
        <Link
          href="/"
          className="inline-block bg-slate-900 text-white font-semibold rounded-lg px-6 py-3 hover:bg-slate-800 transition-all"
        >
          Върни се на начало
        </Link>
      </div>
    </div>
  );
}
