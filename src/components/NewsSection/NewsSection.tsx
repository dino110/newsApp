import NewsCard from "./NewsCard/NewsCard";
import LatestNewsCard from "./LatestNewsCard/LatestNewsCard";
import { useEffect } from "react";

import imageNotAvailable from "../../assets/image_not_available.webp?inline";

import { getCategoryNews } from "../../utils/getNews";
import { signal } from "@preact/signals-react";

const allCategories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export interface Article {
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

function NewsSection({
  searchInput,
  categorySignal,
}: {
  searchInput: { value: string };
  categorySignal: { value: string };
}) {
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

  return (
    <div className="NewsSection">
      <div className="Title">News</div>
      <div className="NewsContainer">
        <LatestNewsCard allNews={allNews} />
        {allNews.value
          .filter((news) => {
            if (categorySignal.value != "") {
              return news.category
                ?.toLowerCase()
                .includes(categorySignal.value);
            } else return news;
          })
          .filter((categoryNews) => {
            if (searchInput.value != "") {
              return categoryNews.title
                .toLowerCase()
                .includes(searchInput.value);
            } else return categoryNews;
          })
          .map((news, index) => (
            <NewsCard
              key={index}
              order={index}
              url={news.url}
              category={news.category || ""}
              newsAuthor={news.author || "unknown author"}
              newsTitle={news.title}
              imgUrl={news.urlToImage || imageNotAvailable}
            />
          ))}
      </div>
    </div>
  );
}

export default NewsSection;
