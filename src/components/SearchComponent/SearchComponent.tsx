import { useState } from "react";
import searchIcon from "../../assets/Search.svg";

function SearchComponent() {
  const [searchInput, setSearchInput] = useState("");

  const searchNews = (input: string) => {
    console.log(input);
  };

  return (
    <div className="SearchComponent">
      <div className="MyNews">
        <section className="RedT">My</section>
        <section>News</section>
      </div>
      <div className="SearchInput">
        <img src={searchIcon} className="searchIcon" />
        <input
          placeholder="Search news"
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          className="SearchButton"
          onClick={() => searchNews(searchInput)}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
