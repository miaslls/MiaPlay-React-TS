import "../styles/GameList.css";

import GameListItem from "./GameListItem";

const GameList = () => {
  return (
    <>
      <section className="game-list-genre-container">
        <div className="game-list-header">
          <h2 className="genre-title">genre</h2>
          <div className="game-list-expand-collapse-icon clickable">
            <i className="bi bi-chevron-double-down"></i>
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
