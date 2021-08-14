import React, { useState } from "react";
import AddGame, { saveGames, gameObject } from "./AddGameForm";
import _ from "lodash";

export const getGames = () => {
  return JSON.parse(localStorage.getItem("GAMES") ?? "[]");
};

const GameList: React.FC = () => {
  const [games, setGames] = useState(getGames());

  const removeGame = (game: gameObject) => {
    const games = getGames();
    _.remove(
      games,
      (g: gameObject) => JSON.stringify(g) === JSON.stringify(game)
    );
    saveGames(games);
    setGames(games);
  };

  return (
    <>
      <AddGame setGames={setGames} />
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
