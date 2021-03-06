import React, { useState } from "react";
import _ from "lodash";
import { getGames } from "./GameList";
import "./AddGameForm.css";

export interface gameObject {
  name: string;
  publisher: string;
  year: string;
}

const formInitialState: gameObject = {
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const games = getGames();
    const names = games.map((game: gameObject) => game.name);
    if (form.name !== "" && !names.includes(form.name)) {
      games.push({
        name: form.name,
        publisher: form.publisher,
        year: form.year,
      });
      saveGames(games);
      setGames(games);
    }
  };

  const handleSetForm = ({ target: { name, value } }: any) => {
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <p className={"text-label"}>Name:</p>
        <input
          className={"input-field"}
          onChange={handleSetForm}
          type="text"
          name="name"
        />
      </label>
      <label>
        <p className={"text-label"}>Publisher:</p>
        <input
          className={"input-field"}
          onChange={handleSetForm}
          type="text"
          name="publisher"
        />
      </label>
      <label>
        <p className={"text-label"}>Year:</p>
        <input
          className={"input-field"}
          onChange={handleSetForm}
          type="year"
          name="year"
        />
      </label>
      <input className={"add-button"} type="submit" value="Add Game" />
    </form>
  );
};

export default AddGame;
