import "../styles/Search.css";

const Search = () => {
  return (
    <>
      <div className="search">
        <input
          className="search-input"
          name="searchInput"
          type="text"
          placeholder="search"
        />
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
