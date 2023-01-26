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
  useEffect(() => {
    console.log("from App:", categorySignal.value);
    if (categorySignal.value == "home") {
      getGeneralNews().then((data) => {
        allNews.value = data;
        console.log(data);
      });
    } else {
      getCategoryNews(categorySignal.value).then((data) => {
        allNews.value = data;
        console.log(data);
      });
    }
    //  finish loading
  }, [categorySignal.value]);

  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <hr className="HorizontalLine"></hr>
      {categorySignal.value}
      <div className="MainContent">
        <SideMenu categorySignal={categorySignal} />
        <NewsSection categorySignal={categorySignal} />
      </div>
    </div>
  );
}

export default App;
