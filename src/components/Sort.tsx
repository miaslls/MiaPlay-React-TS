import "../styles/Sort.css";

const Sort = () => {
  return (
    <>
      <div className="sort">
        <div className="sort-item clickable">
          <i className="bi bi-sort-alpha-down"></i>
        </div>
        <div className="sort-item sort-item--selected clickable">
          <i className="bi bi-calendar-date"></i>
        </div>
        <div className="sort-item clickable">
          <i className="bi bi-star"></i>
        </div>
      </div>
    </>
  );
};

export default Sort;
