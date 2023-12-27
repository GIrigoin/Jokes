import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import SingleCard from "./components/SingleCard/SingleCard";
import TwoPartCard from "./components/TwoPartCard/TwoPartCard";

function App() {
  const [joke, setJoke] = useState({});
  const URL = "http://localhost:3001/jokes/";

  const getNewJoke = async (how, param) => {
    let fullUrl = "";
    try {
      switch (how) {
        case "cat":
          fullUrl = `${URL}/byCategory/${param}`;

          break;
        case "id":
          fullUrl = `${URL}/byID?id=${param}`;

          break;
        case "rnd":
          fullUrl = `${URL}/random`;
          break;
        default:
          break;
      }
      let { data } = await axios(fullUrl);
      if (data) {
        setJoke(data);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="app">
      <NavBar getNewJoke={getNewJoke} />
      {joke.type === "twopart" ? (
        <TwoPartCard setup={joke.setup} delivery={joke.delivery} />
      ) : (
        <SingleCard joke={joke.joke} />
      )}
    </div>
  );
}

export default App;
