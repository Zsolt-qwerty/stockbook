import { CompanyProfile2Data, QuoteData } from "finnhub";
import { ReactNode } from "react";

type StockCardProps = {
  companyProfile2Data: CompanyProfile2Data;
  stockQuoteData: QuoteData;
};

function StockCard({ companyProfile2Data, stockQuoteData }: StockCardProps): ReactNode {

  if (!stockQuoteData || !companyProfile2Data || !companyProfile2Data.ticker) {
    return <div className="card stock">No stock data available</div>;
  }

  return (
    <div className="card stock">
      <div className="stockLogo">
        <img src={companyProfile2Data.logo} alt="" />
      </div>
      <div className="left">
        {companyProfile2Data.name}
      </div>
      <div className="right">
        {companyProfile2Data.currency} {stockQuoteData.c}
      </div>
      <div className="left gray">
        {companyProfile2Data.ticker}
      </div>
      <div className={`right ${
        stockQuoteData.d > 0 ? "green" :
        stockQuoteData.d < 0 ? "red" : "gray"
      }`}>
        {stockQuoteData.d > 0 ? "+" : ""}{stockQuoteData.d} ({Math.abs(stockQuoteData.dp).toFixed(2)}%)
      </div>
    </div>
  );
}

export default StockCard;
