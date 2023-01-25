import { useState } from "react";
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SideMenu from "./components/SideMenu/SideMenu";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <SideMenu />

      <div></div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
