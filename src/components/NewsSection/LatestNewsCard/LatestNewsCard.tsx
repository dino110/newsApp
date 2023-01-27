import LatesNewsIcon from "../../../assets/LatestNewsIcon.svg?inline";
//import LatesNewsIcon from "../../../assets/Search.svg?inline";

type latestNews = { time: string; title: string };

const latestNewsList: latestNews[] = [
  {
    time: "14:30",
    title: "How To Write Better Advertising Copy",
  },
  {
    time: "14:30",
    title: "6 Powerful Tips To Creating Testimonials That Sell Your Products",
  },
  {
    time: "14:30",
    title: "5 Reasons To Choose A Notebook Over A Computer Desktop",
  },
  {
    time: "14:30",
    title: "6 Powerful Tips To Creating Testimonials That Sell Your Products",
  },
  {
    time: "14:30",
    title: "Use Your Reset Button",
  },
  {
    time: "14:30",
    title: "Cdc Issues Health Alert Notice For Travelers To Usa From Hon",
  },
  {
    time: "14:30",
    title: "Use Your Reset Button",
  },
];

function LatestNewsCard() {
  return (
    <div className="LatestNewsCard">
      <div className="TitleSection">
        <img src={LatesNewsIcon} />
        <p>Latest News</p>
      </div>
      <div className="LatestNewsSection">
        {latestNewsList.map((news, index) => (
          <div className="SingleNews" key={index}>
            <div className="NewsTime">{news.time}</div>
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
