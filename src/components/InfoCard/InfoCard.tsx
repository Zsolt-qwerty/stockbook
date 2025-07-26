import { CompanyProfile2Data, QuoteData } from "finnhub";
import { ReactNode } from "react";

type InfoCardProps = {
  companyProfile2Data: CompanyProfile2Data;
  stockQuoteData: QuoteData;
};

function InfoCard({ companyProfile2Data, stockQuoteData }: InfoCardProps): ReactNode {

  if (!stockQuoteData || !companyProfile2Data || !companyProfile2Data.ticker) {
    return <div className="card info">No stock data available</div>;
  }

  return (
    <div className="card info">
      <div className="left">
        <div className="ticker gray">{companyProfile2Data.ticker}</div>
        <div className="stock-name">{companyProfile2Data.name}</div>
        <div className="current-price">
          {companyProfile2Data.currency} {stockQuoteData.c}
        </div>
        <div className={`difference ${
          stockQuoteData.d > 0 ? "green" :
          stockQuoteData.d < 0 ? "red" : "gray"
        }`}>
          {stockQuoteData.d > 0 ? "+" : ""}
          {stockQuoteData.d} ({Math.abs(stockQuoteData.dp).toFixed(2)}%)
        </div>
      </div>
      <div className="right">
        <div className="stockLogo">
          <img src={companyProfile2Data.logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
