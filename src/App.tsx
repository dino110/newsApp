import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SideMenu from "./components/SideMenu/SideMenu";
import NewsSection from "./components/NewsSection/NewsSection";

import { ResponseAPI } from "./api/api";
import { getCategoryNews, getGeneralNews } from "./utils/getNews";
import "./App.scss";

import { signal } from "@preact/signals-react";

const categorySignal = signal("home");
const allNews = signal<ResponseAPI[]>([]);

function App() {
  //const [news, setNews] = useState<ResponseAPI[]>([]);

  useEffect(() => {
    if (categorySignal.value == "home") {
      getGeneralNews().then((data) => {
        allNews.value = data;
        console.log("data:", data);
      });
    } else {
      getCategoryNews(categorySignal.value).then((data) => {
        allNews.value = data;
        console.log("data:", data);
      });
    }
  }, [categorySignal.value]);

  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <hr className="HorizontalLine"></hr>
      <div className="MainContent">
        <SideMenu categorySignal={categorySignal} />
        <NewsSection allNews={allNews} />
      </div>
    </div>
  );
}

export default App;
