import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>
          Mia<span>Play</span>
        </h1>

        <nav className="main-menu">
          <div className="main-menu-item clickable">
            <i className="bi bi-person"></i>
          </div>
          <div className="main-menu-item clickable">
            <i className="bi bi-sliders"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
