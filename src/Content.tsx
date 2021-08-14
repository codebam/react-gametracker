import "./Content.css";
import AddGame from "./AddGameForm";
import GameList, { getGames } from "./GameList";

const Content: React.FC = () => {
  return (
    <>
      <AddGame />
      <GameList games={getGames()} />
    </>
  );
};

export default Content;
