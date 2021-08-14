import React, { useState } from "react";
import _ from "lodash";
import { getGames } from "./GameList";

const formInitialState = {
  name: "",
};

export const saveGames = (games: Array<String>) => {
  localStorage.setItem("GAMES", JSON.stringify(_.uniq(games)));
};

interface AddGameProps {
  setGames: Function;
}

const AddGame: React.FC<AddGameProps> = ({ setGames }) => {
  const [form, setForm] = useState(formInitialState);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const games = getGames();
    games.push(form.name);
    saveGames(games);
    setGames(_.uniq(games));
  };

  const handleSetForm = ({ target: { name, value } }: any) => {
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input onChange={handleSetForm} type="text" name="name" />
      </label>
      <input type="submit" value="Add Game" />
    </form>
  );
};

export default AddGame;
