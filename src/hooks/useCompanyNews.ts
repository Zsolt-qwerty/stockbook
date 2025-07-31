import { useState, useEffect } from "react";
import { CompanyNewsData } from "finnhub";
import getEnvVarOrThrowErr from "../utils/getEnvVarOrThrowErr";

const FINNHUB_BASE_URL = "https://finnhub.io/api/v1";

interface UseCompanyNewsReturn {
  companyNewsData: CompanyNewsData[];
  isLoading: boolean;
  error: string | null;
}

export function useCompanyNews(ticker: string): UseCompanyNewsReturn {
  const [companyNewsData, setCompanyNewsData] = useState([] as CompanyNewsData[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ticker) return;

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    const fetchCompanyNews = async () => {
      try {
        const FINNHUB_API_KEY = getEnvVarOrThrowErr("VITE_FINNHUB_TOKEN");

        const yesterday = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
        const today = new Date().toISOString().split("T")[0];
        
        const response = await fetch(
          `${FINNHUB_BASE_URL}/company-news?symbol=${ticker}&from=${yesterday}&to=${today}&token=${FINNHUB_API_KEY}`,
          {
            method: "GET",
            redirect: "follow" as RequestRedirect,
          }
        );

        if (!response.ok) {
          throw new Error(`News API error! status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          console.log(`${ticker} - Company News data:`, data);
          setCompanyNewsData(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error(`News API Error for ${ticker}:`, error);
          setError(error instanceof Error ? error.message : 'Unknown error occurred');
          setIsLoading(false);
        }
      }
    };

    fetchCompanyNews();

    return () => {
      isMounted = false;
    };
  }, [ticker]);

  return {
    companyNewsData,
    isLoading,
    error,
  };
}
