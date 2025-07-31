import { useState, useEffect } from "react";
import { CompanyProfile2Data, QuoteData } from "finnhub";
import { FINNHUB_BASE_URL, FINNHUB_API_KEY } from "./finnhubCredentials.ts";

interface UseStockDataReturn {
  companyProfile2Data: CompanyProfile2Data;
  stockQuoteData: QuoteData;
  isLoading: boolean;
  error: string | null;
}

export function useStockData(ticker: string): UseStockDataReturn {
  const [companyProfile2Data, setCompanyProfile2Data] = useState({} as CompanyProfile2Data);
  const [stockQuoteData, setStockQuoteData] = useState({} as QuoteData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ticker) return;

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    const fetchStockData = async () => {
      try {
        // Fetch company profile and quote data in parallel
        const [profileResponse, quoteResponse] = await Promise.all([
          fetch(
            `${FINNHUB_BASE_URL}/stock/profile2?symbol=${ticker}&token=${FINNHUB_API_KEY}`,
            {
              method: "GET",
              redirect: "follow" as RequestRedirect,
            }
          ),
          fetch(
            `${FINNHUB_BASE_URL}/quote?symbol=${ticker}&token=${FINNHUB_API_KEY}`,
            {
              method: "GET",
              redirect: "follow" as RequestRedirect,
            }
          ),
        ]);

        if (!profileResponse.ok) {
          throw new Error(`Profile API error! status: ${profileResponse.status}`);
        }
        if (!quoteResponse.ok) {
          throw new Error(`Quote API error! status: ${quoteResponse.status}`);
        }

        const [profileData, quoteData] = await Promise.all([
          profileResponse.json(),
          quoteResponse.json(),
        ]);

        if (isMounted) {
          console.log(`${ticker} - Company Profile 2 data:`, profileData);
          console.log(`${ticker} - Quote data:`, quoteData);
          setCompanyProfile2Data(profileData);
          setStockQuoteData(quoteData);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error(`API Error for ${ticker}:`, error);
          setError(error instanceof Error ? error.message : 'Unknown error occurred');
          setIsLoading(false);
        }
      }
    };

    fetchStockData();

    return () => {
      isMounted = false;
    };
  }, [ticker]);

  return {
    companyProfile2Data,
    stockQuoteData,
    isLoading,
    error,
  };
}
