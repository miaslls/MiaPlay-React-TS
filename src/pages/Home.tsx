import "../styles/Home.css";

import Header from "../components/Header";
import Filters from "../components/Filters";
import GameList from "../components/GameList";

const Home = () => {
  return (
    <>
      <section className="home-header">
        <Header />
        <Filters />
      </section>
      <main className="game-lists">
        <GameList />
        <GameList />
        <GameList />
      </main>
    </>
  );
};

export default Home;
