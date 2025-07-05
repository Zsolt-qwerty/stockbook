declare module 'finnhub' {
  export interface QuoteData {
    c: number;  // current price
    d: number;  // price change
    dp: number; // price change in percentage
    h: number;  // high price of the day
    l: number;  // low price of the day
    o: number;  // open price of the day
    pc: number; // previous close price
    t: number;  // timestamp
  }

  export class ApiClient {
    static instance: ApiClient;
    authentications: {
      api_key: {
        apiKey: string;
      };
    };
  }

  export class DefaultApi {
    constructor();
    quote(
      symbol: string, 
      callback: (error: Error | null, data: QuoteData, response: unknown) => void
    ): void;
  }
}
