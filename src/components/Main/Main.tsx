import { useState, useEffect } from "react";
import "./Main.css";
import {
  ApiClient,
  DefaultApi,
  CompanyProfile2Data,
  QuoteData,
  CompanyNewsData,
} from "finnhub";
import { getEnvVariableOrThrow } from "../../utils/getEnvVariableOrThrow.ts";

import StockCard from "../StockCard/StockCard.tsx";
import InfoCard from "../InfoCard/InfoCard.tsx";
import NewsCard from "../NewsCard/NewsCard.tsx";

function Main() {

  // Example ticker symbols, can be changed to any valid symbols
  const tickers: string[] = ["AAPL", "TSLA"];

  const [companyProfile2Data, setCompanyProfile2Data] = useState({} as CompanyProfile2Data);
  const [stockQuoteData, setStockQuoteData] = useState({} as QuoteData);
  const [companyNewsData, setCompanyNewsData] = useState([] as CompanyNewsData[]);
  const [ticker, setTicker] = useState(tickers[0] as string);

  useEffect(() => {
    // This effect runs once when the component mounts
    console.log("Component mounted");

    const api_key = ApiClient.instance.authentications["api_key"];
    api_key.apiKey = getEnvVariableOrThrow("VITE_FINNHUB_TOKEN");
    const finnhubClient = new DefaultApi();

    finnhubClient.companyProfile2({"symbol": ticker}, (error: Error | null, data: CompanyProfile2Data, response: unknown) => {
      if (error) {
        console.error("API Error:", error);
        return;
      }
      console.log("Company Profile 2 data:", data);
      setCompanyProfile2Data(data);
      console.log("API response:", response);
    });
    
    finnhubClient.quote(ticker, (error: Error | null, data: QuoteData, response: unknown) => {
      if (error) {
        console.error("API Error:", error);
        return;
      }
      console.log("Quote data:", data);
      setStockQuoteData(data);
      console.log("API response:", response);
    });

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const today = new Date().toISOString().slice(0, 10);
    finnhubClient.companyNews(ticker, yesterday, today, (error: Error | null, data: CompanyNewsData[], response: unknown) => {
      if (error) {
      console.error("API Error:", error);
      return;
      }
      console.log("Company News data:", data);
      setCompanyNewsData(data);
      console.log("API response:", response);
    });

    // // Uncomment the following lines to enable WebSocket connection
    // const token = import.meta.env.VITE_FINNHUB_TOKEN;
    // if (!token) {
    //   console.error("VITE_FINNHUB_TOKEN is not set in environment variables");
    //   return;
    // }
    // const socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`);

    // // Connection opened -> Subscribe
    // socket.addEventListener("open", function () { // can add (event) if needed
    //   console.log("WebSocket connection opened");
    //   socket.send(JSON.stringify({"type":"subscribe", "symbol": "AAPL"}));
    //   socket.send(JSON.stringify({"type":"subscribe", "symbol": "BINANCE:BTCUSDT"}));
    //   socket.send(JSON.stringify({"type":"subscribe", "symbol": "IC MARKETS:1"}));
    // });

    // // Listen for messages
    // socket.addEventListener("message", function (event) {
    //   console.log("Message from server ", event.data);
    // });

    // // // Unsubscribe
    // // const unsubscribe = function(symbol) {
    // //   socket.send(JSON.stringify({"type":"unsubscribe","symbol": symbol}));
    // // };

    // // Cleanup function
    // return () => {
    //   console.log("Component unmounted");
    //   socket.close();
    // };
  }, [ticker]);

  return (
    <main>
      <div className="main-window">
        <div className="left-window">
          <StockCard
            companyProfile2Data={companyProfile2Data}
            stockQuoteData={stockQuoteData}
          />
          <StockCard
            companyProfile2Data={companyProfile2Data}
            stockQuoteData={stockQuoteData}
          />
          <StockCard
            companyProfile2Data={companyProfile2Data}
            stockQuoteData={stockQuoteData}
          />
          <button onClick={() => ticker === tickers[0] ? setTicker(tickers[1]) : setTicker(tickers[0])}>
            {ticker === tickers[0] ? tickers[1] : tickers[0]}
          </button>(temporary button for testing)
        </div>
        <div className="right-window">
          <InfoCard
            companyProfile2Data={companyProfile2Data}
            stockQuoteData={stockQuoteData}
          />
          <NewsCard companyNewsData={companyNewsData} />
        </div>
      </div>
    </main>
  );
}

export default Main;
