const currencySymbols: Record<string, string> = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  CHF: "Fr",
  CAD: "C$",
  AUD: "A$",
  NZD: "NZ$",
  JPY: "¥",
  CNY: "¥",
  HKD: "HK$",
  SGD: "S$",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  RUB: "₽",
  INR: "₹",
};

function getCurrencySymbol(currency: string): string {
  return currencySymbols[currency] || `${currency} `;
}

export default getCurrencySymbol;
