import { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ getNewJoke }) => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };
  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.NavBar}>
      <div>
        <label htmlFor="">Categoria: </label>
        <select name="categoria" value={category} onChange={handleSelectChange}>
          <option value="Programming">Programming</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Dark">Dark</option>
          <option value="Pun">Pun</option>
          <option value="Spooky">Spooky</option>
          <option value="Christmas">Christmas</option>
        </select>
        <button
          onClick={() => {
            getNewJoke("cat", category);
          }}
        >
          Nuevo
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            getNewJoke("rnd");
          }}
        >
          Random
        </button>
      </div>
      <div>
        <input type="text" value={id} onChange={handleInputChange} />
        <button
          onClick={() => {
            getNewJoke("id", id);
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default NavBar;
