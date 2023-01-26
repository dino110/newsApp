function NewsCard(props: {
  category: string;
  newsTitle: string;
  newsAuthor: string;
  imgUrl: string;
  order: number;
}) {
  return (
    <div className="NewsCard" style={{ order: props.order }}>
      <img className="NewsImage" src={props.imgUrl}></img>
      <div className="NewsInfo">
        <div className="Category">{props.category}</div>
        <div className="NewsTitle">{props.newsTitle}</div>
        <div className="NewsAuthor">{props.newsAuthor}</div>
      </div>
    </div>
  );
}
export default NewsCard;
