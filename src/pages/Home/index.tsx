import "./Home.css";

import Header from "../../components/Header";
import Filters from "../../components/Filters";
import GameList from "../../components/GameList";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="game-lists">
        <GameList />
        <GameList />
        <GameList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
