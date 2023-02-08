import NewsCard from "./NewsCard/NewsCard";
import LatestNewsCard from "./LatestNewsCard/LatestNewsCard";
import { useEffect } from "react";

import { getCategoryNews } from "../../utils/getNews";
import { signal } from "@preact/signals-react";

const allCategories = [
  "business",
  "entertainment",
  //"general",
  // "health",
  // "science",
  // "sports",
  // "technology",
];

interface Article {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category?: string;
}
const allNews = signal<Article[]>([]);

function NewsSection({ searchInput }: { searchInput: { value: string } }) {
  useEffect(() => {
    let allArticles = getAllArticles();
    allArticles.then((allArticles) => {
      allNews.value = allArticles.sort(function (a: Article, b: Article) {
        return (
          new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
        );
      });
    });
  }, []);

  const getAllArticles = async () => {
    let newsArr: Article[] = [];
    for (const category of allCategories) {
      const news = await getCategoryNews(category);
      for (const article of news.articles) {
        let newArticle = { category: category, ...article };
        newsArr = [...newsArr, newArticle];
      }
    }
    return newsArr;
  };

  return (
    <div className="NewsSection">
      <div className="Title">News</div>
      <div className="NewsContainer">
        <LatestNewsCard />
        {allNews.value
          .filter((news) => {
            if (searchInput.value != "") {
              return news.title.toLowerCase().includes(searchInput.value);
            } else return news;
          })
          .map((news, index) => (
            <NewsCard
              key={index}
              order={index}
              category={news.category || ""}
              newsAuthor={news.author || "unknown"}
              newsTitle={news.title}
              imgUrl={news.urlToImage} // //"https://image.cnbcfm.com/api/v1/image/107185642-1675061950003-gettyimages-1192715579-AFP_1NK8BB.jpeg?v=1675062646&w=1920&h=1080"
            />
          ))}

        {/*      <NewsCard
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
        /> */}
      </div>
    </div>
  );
}

export default NewsSection;
