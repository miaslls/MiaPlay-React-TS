import "../styles/Home.css";

import Header from "../components/Header";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <>
      <section className="home-header">
        <Header />
        <Filters />
      </section>
    </>
  );
};

export default Home;
