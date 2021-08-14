import React, { useState } from "react";
import _ from "lodash";
import { getGames } from "./GameList";

const formInitialState = {
  name: "",
};

export const setGames = (games: Array<String>) => {
  localStorage.setItem("GAMES", JSON.stringify(_.uniq(games)));
};

const AddGame: React.FC = () => {
  const [form, setForm] = useState(formInitialState);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const games = getGames();
    games.push(form.name);
    setGames(games);
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
