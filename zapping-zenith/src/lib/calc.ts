const consumption: Record<number, number> = {1:1500,2:2500,3:3500,4:4250,5:5000};
const priceGV=0.48, priceMarket=0.35, basicFee=180;
export function calculateSavings(household:number,monthlySpend:number){
const usage=consumption[household]||consumption[1];
const currentYearly=monthlySpend*12;
const marketYearly=usage*priceMarket+basicFee;
const savings=Math.max(0,currentYearly-marketYearly);
return{estimatedUsage:usage,estimatedCost:Math.round(marketYearly),potentialSavings:Math.round(savings),savingsPercent:Math.round(savings/currentYearly*100)};
}
export function validateInput(household:number,monthly:number):boolean{
return household>=1&&household<=5&&monthly>=20&&monthly<=500;
}
