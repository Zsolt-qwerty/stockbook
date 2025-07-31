import { ReactNode } from "react";
import getCurrencySymbol from "../../utils/getCurrencySymbol.ts";
import { useStockData } from "../../hooks/useStockData.ts";

type StockCardProps = {
  ticker: string;
  onClick?: () => void;
  isSelected?: boolean;
};

function StockCard({ ticker, onClick, isSelected }: StockCardProps): ReactNode {
  const { companyProfile2Data, stockQuoteData, isLoading, error } = useStockData(ticker);

  if (isLoading) {
    return <div className="card stock">Loading {ticker}...</div>;
  }

  if (error) {
    return <div className="card stock">Error loading {ticker}: {error}</div>;
  }

  if (!stockQuoteData || !companyProfile2Data || !companyProfile2Data.ticker) {
    return <div className="card stock">No stock data available for {ticker}</div>;
  }

  return (
    <div
      className={`card stock ${isSelected ? 'selected' : ''} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <div className="stockLogo">
        <img
          src={companyProfile2Data.logo}
          alt={`Logo of ${companyProfile2Data.name}`}
        />
      </div>
      <div className="left">
        {companyProfile2Data.name}
      </div>
      <div className="right">
        {getCurrencySymbol(companyProfile2Data.currency)}
        {stockQuoteData.c.toFixed(2)}
      </div>
      <div className="left gray">
        {companyProfile2Data.ticker}
      </div>
      <div className={`right ${
        stockQuoteData.d > 0 ? "green" :
        stockQuoteData.d < 0 ? "red" : "gray"
      }`}>
        {stockQuoteData.d > 0 ? "+" : ""}
        {stockQuoteData.d.toFixed(2)}
        {` (${Math.abs(stockQuoteData.dp).toFixed(2)}%)`}
      </div>
    </div>
  );
}

export default StockCard;
