import "../styles/Filters.css";

const Filters = () => {
  return (
    <>
      <nav className="filters">
        <div className="genre-menu clickable">
          <span>all genres</span>
          <span>
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>

        <div className="sort">
          <div className="sort-item clickable">
            <i className="bi bi-grid"></i>
          </div>
          <div className="sort-item clickable">
            <i className="bi bi-sort-alpha-down"></i>
          </div>
          <div className="sort-item sort-item--selected clickable">
            <i className="bi bi-calendar-date"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Filters;
