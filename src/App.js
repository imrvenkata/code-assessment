import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { render } from "@testing-library/react";
import Createplayers from "./Components/Createplayers";
import Navbar from "./Components/Navbar";
class App extends React.Component {
  state = {
    playerName1: "player1",
    playerName2: "player2",
    player1: 0,
    player2: 0,
    ties: 0,
  };
  render() {
    const { playerName1, playerName2, player1, player2, ties } = this.state;
    return (
      <div className="App">
        <Navbar
          playerName1={playerName1}
          playerName2={playerName2}
          player1={player1}
          player2={player2}
          ties={ties}
        />
        <Createplayers></Createplayers>
      </div>
    );
  }
}

export default App;
