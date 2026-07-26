import { CalculatorInputs, CalculatorResult } from '@/types';

const GERMANY_AVERAGE_RATES = {
  electricity: 0.32, // € per kWh
  gas: 0.08, // € per kWh
  internet: 35, // € per month
};

export function calculateElectricityEstimate(
  input: CalculatorInputs
): CalculatorResult {
  const currentAnnual = input.currentMonthlyPayment * 12;
  const consumption = input.estimatedConsumption || input.householdSize * 2500;

  const estimatedRate = input.currentMonthlyPayment / (consumption / 12);
  const averageRate = GERMANY_AVERAGE_RATES.electricity;

  const potentialSavings = (estimatedRate - averageRate) * consumption * 0.8;
  const percentageSavings = (potentialSavings / currentAnnual) * 100;

  return {
    estimatedAnnualSavings: Math.max(0, Math.round(potentialSavings)),
    percentageSavings: Math.max(0, Math.round(percentageSavings * 10) / 10),
    recommendations: [
      'Сравнете с минимум 3 доставчика',
      'Потърсете договори без начална комисия',
      'Разгледайте зелени енергийни опции',
    ],
  };
}

export function calculateGasEstimate(input: CalculatorInputs): CalculatorResult {
  const currentAnnual = input.currentMonthlyPayment * 12;
  const consumption = input.estimatedConsumption || input.householdSize * 10000;

  const estimatedRate = input.currentMonthlyPayment / (consumption / 12);
  const averageRate = GERMANY_AVERAGE_RATES.gas;

  const potentialSavings = (estimatedRate - averageRate) * consumption * 0.75;
  const percentageSavings = (potentialSavings / currentAnnual) * 100;

  return {
    estimatedAnnualSavings: Math.max(0, Math.round(potentialSavings)),
    percentageSavings: Math.max(0, Math.round(percentageSavings * 10) / 10),
    recommendations: [
      'Проверете за фиксирани ставки за 12-24 месеца',
      'Включите отопление в преглед на възможностите',
      'Разберете за бонуси при смяна на доставчик',
    ],
  };
}

export function calculateInternetEstimate(
  input: CalculatorInputs
): CalculatorResult {
  const currentAnnual = input.currentMonthlyPayment * 12;
  const averageMonthly = GERMANY_AVERAGE_RATES.internet;
  const potentialSavings = (input.currentMonthlyPayment - averageMonthly) * 12 * 0.6;
  const percentageSavings = (potentialSavings / currentAnnual) * 100;

  return {
    estimatedAnnualSavings: Math.max(0, Math.round(potentialSavings)),
    percentageSavings: Math.max(0, Math.round(percentageSavings * 10) / 10),
    recommendations: [
      input.currentSpeed && input.currentSpeed < 100
        ? 'Можете да получите по-бързо интернет с по-нисък разход'
        : 'Търсите по-добра цена за текущата скорост',
      'Разберете за промоционални пакети',
      'Проверете за связи с телекомуникационни оператори',
    ],
  };
}

export function calculateSavings(input: CalculatorInputs): CalculatorResult {
  switch (input.service) {
    case 'electricity':
      return calculateElectricityEstimate(input);
    case 'gas':
      return calculateGasEstimate(input);
    case 'internet':
      return calculateInternetEstimate(input);
    default:
      return {
        estimatedAnnualSavings: 0,
        percentageSavings: 0,
        recommendations: [],
      };
  }
}
