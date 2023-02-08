import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SideMenu from "./components/SideMenu/SideMenu";
import NewsSection from "./components/NewsSection/NewsSection";

import "./App.scss";

import { signal } from "@preact/signals-react";

const categorySignal = signal("home");
const searchInput = signal("");

function App() {
  return (
    <div className="App">
      <Header />
      <SearchComponent searchInput={searchInput} />
      <hr className="HorizontalLine"></hr>
      <div className="MainContent">
        <SideMenu categorySignal={categorySignal} />
        <NewsSection searchInput={searchInput} />
      </div>
    </div>
  );
}

export default App;
