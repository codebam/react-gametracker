import React, { useState } from "react";
import AddGame, { saveGames, gameObject } from "./AddGameForm";
import _ from "lodash";

export const getGames = () => {
  return JSON.parse(localStorage.getItem("GAMES") ?? "[]");
};

const GameList: React.FC = () => {
  const [games, setGames] = useState(getGames());
  const [sortDirection, setSortDirection] = useState("ascending");

  const removeGame = (game: gameObject) => {
    const games = getGames();
    _.remove(
      games,
      (g: gameObject) => JSON.stringify(g) === JSON.stringify(game)
    );
    saveGames(games);
    setGames(games);
  };

  const sortListByYear = () => {
    const games = getGames();
    if (sortDirection === "ascending") {
      setSortDirection("decending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.year > b.year ? 1 : -1
      );
      setGames(sorted);
    }
    if (sortDirection === "decending") {
      setSortDirection("ascending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.year > b.year ? -1 : 1
      );
      setGames(sorted);
    }
  };

  const sortListByPublisher = () => {
    const games = getGames();
    if (sortDirection === "ascending") {
      setSortDirection("decending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.publisher > b.publisher ? 1 : -1
      );
      setGames(sorted);
    }
    if (sortDirection === "decending") {
      setSortDirection("ascending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.publisher > b.publisher ? -1 : 1
      );
      setGames(sorted);
    }
  };

  const sortListByName = () => {
    const games = getGames();
    if (sortDirection === "ascending") {
      setSortDirection("decending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.name > b.name ? 1 : -1
      );
      setGames(sorted);
    }
    if (sortDirection === "decending") {
      setSortDirection("ascending");
      const sorted = games.sort((a: gameObject, b: gameObject) =>
        a.name > b.name ? -1 : 1
      );
      setGames(sorted);
    }
  };

  return (
    <>
      <AddGame setGames={setGames} />
      <div className="list-head">
        <div onClick={sortListByName}>Name</div>
        <div onClick={sortListByPublisher}>Publisher</div>
        <div onClick={sortListByYear}>Year</div>
      </div>
      {games.map((game: any) => (
        <div className={"game"} key={game.name}>
          <div className="game-name">{game.name}</div>
          <div className="game-publisher">{game.publisher}</div>
          <div className="game-year">{game.year}</div>
          <input
            className={"remove-button"}
            type="button"
            value="remove"
            onClick={() => removeGame(game)}
          />
        </div>
      ))}
    </>
  );
};

export default GameList;
