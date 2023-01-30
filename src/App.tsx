import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SideMenu from "./components/SideMenu/SideMenu";
import NewsSection from "./components/NewsSection/NewsSection";

import { GeneralResponseAPI, CategoryResponseAPI } from "./api/api";
import { getCategoryNews, getGeneralNews } from "./utils/getNews";
import "./App.scss";

import { signal } from "@preact/signals-react";

interface categoryArticles {
  //totalResults: number;
  //category?: string; //!
  articles: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    ulrToImage: string;
    publishedAt: string;
    content: string;
    category?: string;
  }[];
}

interface allArticles extends Array<categoryArticles> {}

const allCategories = [
  "business",
  "entertainment",
  //"general",
  // "health",
  // "science",
  // "sports",
  // "technology",
];
const categorySignal = signal("home");
const allNews = signal<{}[]>([]); //<allArticles>
const categoryNews = signal<CategoryResponseAPI>({
  status: "",
  totalResults: 0,
  // category: "",
  articles: [
    {
      source: { id: "", name: "" },
      author: "",
      title: "",
      description: "",
      url: "",
      ulrToImage: "",
      publishedAt: "",
      content: "",
    },
  ],
});

function App() {
  //const [news, setNews] = useState<ResponseAPI[]>([]);
  const [allNewsState, setAllNewsState] = useState<{}[]>([]); // <allArticles>

  const getAllArticles = () => {
    let newsArr: {}[] = [];
    let newArt = {};
    allCategories.forEach((category) => {
      getCategoryNews(category).then((data) => {
        data.articles.forEach((article) => {
          newArt = { category: category, ...article };
          newsArr.push(newArt);
          //setAllNewsState((old) => [...old, newArt]);
        });
      });
      console.log(category);
    });
    setAllNewsState(newsArr);
    allNews.value = allNewsState;
  };

  /*
  //when <React.StrictMode> is there so App gets 2xrender
  const getAllArticles = () => {
    let allOfAll: {}[] = [{}];
    allCategories.forEach((category) =>
      getCategoryNews(category).then((data) => {
        data.articles.map((article) => {
          //let newArt = { category: category, ...article };
          allOfAll.push({ category: category, ...article });
          setAllNewsState(new Set(allOfAll));
        });
      })
    );
  };
  */

  useEffect(() => {
    console.log("start");
    getAllArticles();
    //allNews.value = allNewsState;
  }, []);

  function print() {
    console.log("allNews:", allNews.value);
    console.log("allNewsState", allNewsState);
  }

  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <hr className="HorizontalLine"></hr>
      <button onClick={print}>print</button>
      <div className="MainContent">
        <SideMenu categorySignal={categorySignal} />
        {/* <NewsSection allNews={allNews} /> */}
      </div>
    </div>
  );
}

export default App;
