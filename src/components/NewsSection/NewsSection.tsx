import NewsCard from "./NewsCard/NewsCard";
import LatestNewsCard from "./LatestNewsCard/LatestNewsCard";

function NewsSection(props: { categorySignal: any }) {
  return (
    <div className="NewsSection">
      <div className="Title">News {props.categorySignal.value}</div>
      <div className="NewsContainer">
        <LatestNewsCard />
        <NewsCard
          order={1}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="1"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
        <NewsCard
          order={2}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="2"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />

        <NewsCard
          order={3}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="3"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
        <NewsCard
          order={4}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="4"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
        <NewsCard
          order={6}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="5"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
        <NewsCard
          order={7}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="6"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />

        <NewsCard
          order={8}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="7"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
        <NewsCard
          order={9}
          category="tech"
          newsAuthor="Caroline Parsons"
          newsTitle="8"
          imgUrl="https://sportshub.cbsistatic.com/i/r/2023/01/25/02feadf9-e536-4511-9db5-c971cb086063/thumbnail/1200x675/58f27bf4b4e8ef11d3d8fd60d796e612/beltran-getty-1.png"
        />
      </div>
    </div>
  );
}

export default NewsSection;
