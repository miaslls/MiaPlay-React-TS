import "./GameList.css";

import GameListItem from "./GameListItem";
import Sort from "../../components/Sort";

const GameList = () => {
  return (
    <>
      <section className="game-list-container">
        <div className="game-list-header">
          <div className="genre">
            <h2>genre</h2>
            <div className="expand-genre-icon clickable">
              <i className="bi bi-chevron-double-down"></i>
            </div>
          </div>

          <div className="game-list-filter">
            <Sort />
          </div>
        </div>
        <ul className="game-list-items">
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
        </ul>
        <div className="game-list-collapse clickable">
          <div className="game-list-collapse-icon">
            <i className="bi bi-chevron-double-up"></i>
          </div>
          <div className="game-list-collapse-text">show less</div>{" "}
        </div>
      </section>
    </>
  );
};

export default GameList;
