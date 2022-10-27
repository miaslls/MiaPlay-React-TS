import "../styles/Filters.css";

const Filters = () => {
  return (
    <>
      <nav className="sort">
        <div className="sort-item clickable">
          <i className="bi bi-star"></i>
        </div>
        <div className="sort-item clickable">
          <i className="bi bi-sort-alpha-down"></i>
        </div>
        <div className="sort-item sort-item--selected clickable">
          <i className="bi bi-calendar-date"></i>
        </div>
      </nav>
    </>
  );
};

export default Filters;
