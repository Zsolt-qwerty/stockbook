import { CompanyNewsData } from "finnhub";
import { ReactNode } from "react";
import NewsItem from "../NewsItem/NewsItem.tsx";

type NewsCardProps = {
  companyNewsData: CompanyNewsData[];
};

function NewsCard({ companyNewsData }: NewsCardProps): ReactNode {

  return (
    <div className="card news">
      <p className="news-title"><em>Latest News</em></p>
      {(!companyNewsData || companyNewsData.length === 0) ? (
        <><hr />No news available</>
      ) : (
        companyNewsData.slice(0, 7).map((newsItem, index) => (
          <NewsItem key={index} newsItem={newsItem} />
        ))
      )}
    </div>
  );
}

export default NewsCard;
