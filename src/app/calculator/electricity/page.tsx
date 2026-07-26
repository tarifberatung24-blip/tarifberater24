import Calculator from '@/features/Calculator';

export default function ElectricityCalculator() {
  return (
    <Calculator
      service="electricity"
      title="Калкулатор за ток"
      icon="⚡"
      description="Разбери колко пари можеш да спестиш със смяна на доставчик на ток."
    />
  );
}
