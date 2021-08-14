import React, { useState } from "react";
import AddGame, { saveGames } from "./AddGameForm";

export const getGames = () => {
  return JSON.parse(localStorage.getItem("GAMES") ?? "[]");
};

const GameList: React.FC = () => {
  const removeGame = (game: String) => {
    const games = getGames();
    const index = games.indexOf(game);
    if (index > -1) {
      games.splice(index, 1);
    }
    saveGames(games);
    setGames(games);
  };
  const [games, setGames] = useState(getGames());
  return (
    <>
      <AddGame setGames={setGames} />
      {games.map((game: any) => (
        <div key={game} onClick={() => removeGame(game)}>
          {game}
        </div>
      ))}
    </>
  );
};

export default GameList;
