declare module "finnhub" {
  export interface QuoteData {
    c: number;  // current price
    d: number;  // price change
    dp: number; // price change in percentage
    h: number;  // high price of the day
    l: number;  // low price of the day
    o: number;  // open price of the day
    pc: number; // previous close price
    t: number;  // Unix timestamp
  }

  export interface CompanyProfile2Data {
    country: string;
    currency: string;
    estimateCurrency: string;
    exchange: string;
    finnhubIndustry: string;
    ipo: string;
    logo: string;
    marketCapitalization: number;
    name: string;
    phone: string;
    shareOutstanding: number;
    ticker: string;
    weburl: string;
  }

  export interface CompanyNewsData {
    category: string;
    datetime: number; // Unix timestamp
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
  }
}
