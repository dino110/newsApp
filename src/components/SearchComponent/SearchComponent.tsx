import { useRef } from "react";
import searchIcon from "../../assets/Search.svg";

function SearchComponent({ searchInput }: { searchInput: { value: string } }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      searchInput.value = inputRef.current.value.toLowerCase().trim();
    }
  };

  return (
    <div className="SearchComponent">
      <div className="MyNews">
        <section className="RedT">My</section>
        <section>News</section>
      </div>
      <form className="SearchInput" onSubmit={handleSubmit}>
        <img src={searchIcon} className="searchIcon" />
        <input
          ref={inputRef}
          placeholder="Search news"
          type="text"
          autoComplete="off"
          // value={searchInput}
          /* onChange={(e) => {
            searchInput.value = e.target.value;
          }}*/
        ></input>
        <button className="SearchButton" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;
