import LatesNewsIcon from "../../../assets/LatestNewsIcon.svg?inline";
import { Article } from "../NewsSection";

function LatestNewsCard({ allNews }: { allNews: { value: Article[] } }) {
  return (
    <div className="LatestNewsCard">
      <div className="TitleSection">
        <img src={LatesNewsIcon} />
        <p>Latest News</p>
      </div>
      <div className="LatestNewsSection">
        {allNews.value.map((news, index) => (
          <div className="SingleNews" key={index}>
            <div className="NewsTime">
              {news.publishedAt.split("T")[1].slice(0, 5)}
            </div>
            <div className="NewsTitle">{news.title}</div>
          </div>
        ))}
      </div>
      <div className="SeeAllNews">
        See all news <section>&gt;</section>
      </div>
    </div>
  );
}

export default LatestNewsCard;
