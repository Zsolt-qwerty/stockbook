import { CompanyNewsData } from "finnhub";
import { ReactNode } from "react";

type NewsCardProps = {
  companyNewsData: CompanyNewsData;
}

function NewsCard({ companyNewsData }: NewsCardProps): ReactNode {

  if (!companyNewsData || !companyNewsData.headline) {
    return <div className="card news">No news available</div>;
  }

  return (
    <div className="card news">
      <p className="news-title"><em>Latest News</em></p>
      {companyNewsData.datetime
        ? new Date(companyNewsData.datetime * 1000).toLocaleString("en-UK", {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
        : ""}
      <h3>{companyNewsData.headline}</h3>
      <p>{companyNewsData.summary}</p>
      <a href={companyNewsData.url} target="_blank" rel="noopener noreferrer">
        Read article at {companyNewsData.source}
      </a><br />
      {companyNewsData.image
        ? <img src={companyNewsData.image} height="12px" alt={`Logo of source ${companyNewsData.source}`} />
        : undefined
      }
    </div>
  );
}

export default NewsCard;
