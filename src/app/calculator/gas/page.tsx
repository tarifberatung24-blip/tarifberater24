import Calculator from '@/features/Calculator';

export default function GasCalculator() {
  return (
    <Calculator
      service="gas"
      title="Калкулатор за газ"
      icon="🔥"
      description="Разбери колко пари можеш да спестиш със смяна на доставчик на газ."
    />
  );
}
