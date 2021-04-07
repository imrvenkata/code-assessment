import React from "react";
import Createplayers from "./Components/Createplayers";
import Endgame from "./Components/Endgame";
import Game from "./Components/Game";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class App extends React.Component {
  state = {
    playerName1: "player1",
    playerName2: "player2",
    player1: 0,
    player2: 0,
    ties: 0,
    winner: "",
    showCreate: true,
    showEndgame: false,
  };

  handleScore = (player) => {
    const { playerName1, playerName2 } = this.state;
    let winner;
    if (player === "player1") {
      winner = playerName1;
    } else if (player === "player2") {
      winner = playerName2;
    } else {
      winner = "tied";
    }

    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    });
  };

  handleEndgame = (input) => {
    this.setState({ showEndgame: input });
  };

  handleName = (player1, player2) => {
    this.setState({
      playerName1: player1,
      playerName2: player2,
      showCreate: false,
    });
  };
  render() {
    const {
      playerName1,
      playerName2,
      player1,
      player2,
      ties,
      winner,
      showCreate,
      showEndgame,
    } = this.state;
    return (
      <div className="App">
        {showEndgame ? (
          <Endgame winner={winner} endgame={this.handleEndgame} />
        ) : null}
        {showCreate ? <Createplayers names={this.handleName} /> : null}
        <Navbar
          playerName1={playerName1}
          playerName2={playerName2}
          player1={player1}
          player2={player2}
          ties={ties}
        />
        <div className="container">
          <div className="mt-4">
            <button className="btn btn-warning" onClick={this.handleEndgame}> Reset </button>
          </div>
          <Game
            playerName1={playerName1}
            playerName2={playerName2}
            handleScore={this.handleScore}
          />
        </div>
      </div>
    );
  }
}

export default App;
