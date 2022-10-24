import "../styles/GameList.css";

import GameListItem from "./GameListItem";
import Filters from "./Filters";

const GameList = () => {
  return (
    <>
      <section className="game-list-container">
        <div className="game-list-header">
          <div className="genre">
            <h2 className="genre-title">genre</h2>
            <div className="expand-genre-icon clickable">
              <i className="bi bi-chevron-double-down"></i>
            </div>
          </div>

          <div className="game-list-filter">
            <Filters />
          </div>
        </div>
        <div className="game-list-items">
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
          <GameListItem />
        </div>
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
