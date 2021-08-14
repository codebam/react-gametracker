import { setGames } from "./AddGameForm";

interface GameListProps {
  games: Array<String>;
}

export const getGames = () => {
  return JSON.parse(localStorage.getItem("GAMES") ?? "[]");
};

export const removeGame = (game: String) => {
  const games = getGames();
  const index = games.indexOf(game);
  if (index > -1) {
    games.splice(index, 1);
  }
  setGames(games);
};

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <>
      {games.map((game) => (
        <div onClick={() => removeGame(game)}>{game}</div>
      ))}
    </>
  );
};

export default GameList;
