import { CompanyNewsData } from "finnhub";
import { ReactNode } from "react";

type NewsItemProps = {
  newsItem: CompanyNewsData;
};

function NewsItem({ newsItem }: NewsItemProps): ReactNode {

  return (
    <>
      <hr />
      {newsItem.datetime
        ? new Date(newsItem.datetime * 1000).toLocaleString("en-UK", {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
        : ""}
      <h3>{newsItem.headline}</h3>
      <p>{newsItem.summary}</p>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
        Read article at {
        newsItem.source !== "Yahoo"
          ? newsItem.source
          : <img src={newsItem.image} alt={`Logo of source ${newsItem.source}`} />
        }
      </a>
    </>
  );
}

export default NewsItem;
