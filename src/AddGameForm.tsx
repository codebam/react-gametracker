import React, { useState } from "react";
import _ from "lodash";
import { getGames } from "./GameList";

const formInitialState = {
  name: "",
  publisher: "",
  year: "",
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
    if (form.name !== "") {
      games.push({
        name: form.name,
        publisher: form.publisher,
        year: form.year,
      });
      saveGames(games);
      setGames(_.uniq(games));
    }
  };

  const handleSetForm = ({ target: { name, value } }: any) => {
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          className={"add-game-button"}
          onChange={handleSetForm}
          type="text"
          name="name"
        />
      </label>
      <label>
        Publisher:
        <input
          className={"add-game-button"}
          onChange={handleSetForm}
          type="text"
          name="publisher"
        />
      </label>
      <label>
        Year:
        <input
          className={"add-game-button"}
          onChange={handleSetForm}
          type="text"
          name="year"
        />
      </label>
      <input className={"add-game-button"} type="submit" value="Add Game" />
    </form>
  );
};

export default AddGame;
