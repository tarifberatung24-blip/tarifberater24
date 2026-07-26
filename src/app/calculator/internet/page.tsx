import Calculator from '@/features/Calculator';

export default function InternetCalculator() {
  return (
    <Calculator
      service="internet"
      title="Калкулатор за интернет"
      icon="🌐"
      description="Разбери колко пари можеш да спестиш със смяна на доставчик на интернет."
    />
  );
}
