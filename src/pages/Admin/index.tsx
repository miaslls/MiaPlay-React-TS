import "./Admin.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Sort from "../../components/Sort";
import AdminGameListItem from "./AdminGameListItem";

const Admin = () => {
  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header />
          <main className="admin-page-container">
            <section className="admin-section admin-games-container">
              <div className="admin-section-header">
                <div className="admin-header-wrapper">
                  <h2>games</h2>
                  <div className="admin-add-icon clickable">
                    <i className="bi bi-plus-circle"></i>
                  </div>
                </div>
                <div className="admin-games-filters-wrapper">
                  <Search />
                  <Sort />
                </div>
              </div>
              <ul className="admin-game-list">
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
                <AdminGameListItem />
              </ul>
            </section>
            <aside>
              <section className="admin-section admin-genres-container">
                <h2>genres</h2>
              </section>
              <section className="admin-section admin-users-container">
                <h2>users</h2>
              </section>
            </aside>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Admin;
