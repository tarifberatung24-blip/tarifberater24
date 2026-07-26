import Link from 'next/link';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  link: string;
}

export default function ServiceCard({ title, icon, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <Link href={link}>
        <Button variant="primary" className="w-full">
          Начало
        </Button>
      </Link>
    </div>
  );
}
