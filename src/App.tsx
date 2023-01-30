import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SideMenu from "./components/SideMenu/SideMenu";
import NewsSection from "./components/NewsSection/NewsSection";

import { GeneralResponseAPI, CategoryResponseAPI } from "./api/api";
import { getCategoryNews, getGeneralNews } from "./utils/getNews";
import "./App.scss";

import { signal } from "@preact/signals-react";

interface Article {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  ulrToImage: string;
  publishedAt: string;
  content: string;
  category?: string;
}

const categorySignal = signal("home");

function App() {
  //const [news, setNews] = useState<ResponseAPI[]>([]);

  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <hr className="HorizontalLine"></hr>
      <div className="MainContent">
        <SideMenu categorySignal={categorySignal} />
        <NewsSection />
      </div>
    </div>
  );
}

export default App;
