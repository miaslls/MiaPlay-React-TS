import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className="footer-menu">
          <div className="footer-menu-item clickable">
            <i className="bi bi-person"></i>
          </div>
          <div className="footer-menu-item clickable">
            <i className="bi bi-sliders"></i>
          </div>
        </nav>
        <h1 className="footer-title">
          Mia<span>Play</span>
        </h1>
        <div className="footer-back-to-top clickable">
          <i className="bi bi-arrow-up-circle"></i>
        </div>
      </footer>
    </>
  );
};
export default Footer;
