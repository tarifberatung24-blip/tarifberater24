export type Service = 'electricity' | 'gas' | 'internet';

export interface CalculatorInputs {
  service: Service;
  postcode: string;
  householdSize: number;
  currentMonthlyPayment: number;
  estimatedConsumption?: number;
  currentProvider?: string;
  currentSpeed?: number;
}

export interface CalculatorResult {
  estimatedAnnualSavings: number;
  percentageSavings: number;
  recommendations: string[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: Service;
  postcode: string;
  calculatorInputs: CalculatorInputs;
  estimatedSavings: number;
  gdprConsent: boolean;
  createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'rejected';
}
