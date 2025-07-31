import { useState } from "react";
import "./Main.css";
import { useStockData } from "../../hooks/useStockData.ts";
import { useCompanyNews } from "../../hooks/useCompanyNews.ts";

import StockCard from "../StockCard/StockCard.tsx";
import InfoCard from "../InfoCard/InfoCard.tsx";
import NewsCard from "../NewsCard/NewsCard.tsx";

// Example ticker symbols, can be changed to any valid symbols
const tickers: string[] = ["AAPL", "TSLA", "GOOGL", "NVDA", "AMZN", "MSFT", "META", "NFLX", "SOUN", "INTC", "AMD", "CSCO", "BRK.A", "V", "JPM"];

function Main() {
  const [selectedTicker, setSelectedTicker] = useState(tickers[0]);
  
  // Get data for the selected ticker to display in InfoCard and NewsCard
  const { companyProfile2Data, stockQuoteData } = useStockData(selectedTicker);
  const { companyNewsData } = useCompanyNews(selectedTicker);

  return (
    <main>
      <div className="main-window">
        <div className="left-window">
          <button onClick={() => {
            const currentIndex = tickers.indexOf(selectedTicker);
            const nextIndex = (currentIndex + 1) % tickers.length;
            setSelectedTicker(tickers[nextIndex]);
          }}>
            View {tickers[(tickers.indexOf(selectedTicker) + 1) % tickers.length]}
          </button>
          {tickers.map((ticker) => (
            <StockCard
              key={ticker}
              ticker={ticker}
              onClick={() => setSelectedTicker(ticker)}
              isSelected={selectedTicker === ticker}
            />
          ))}
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
