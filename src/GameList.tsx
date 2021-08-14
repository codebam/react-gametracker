import React, { useState } from "react";
import AddGame, { saveGames } from "./AddGameForm";
import _ from "lodash";

export const getGames = () => {
  return JSON.parse(localStorage.getItem("GAMES") ?? "[]");
};

const GameList: React.FC = () => {
  const [games, setGames] = useState(getGames());

  const removeGame = (game: String) => {
    const games = getGames();
    _.remove(games, (g) => g === game);
    saveGames(games);
    setGames(games);
  };

  return (
    <>
      <AddGame setGames={setGames} />
      {games.map((game: any) => (
        <div key={game}>
          {game}
          <input
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
