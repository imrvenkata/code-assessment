import React from "react";
import "./../App.scss";
class Navbar extends React.Component {
  render() {
    const { player1, player2, ties, playerName1, playerName2 } = this.props;
    return (
      <div className="navbar">
        <div className="title">
          <h1> GAP - TicTacToe </h1>
        </div>
        <div className="statistics">
          <h2> {playerName1} : {player1} wins </h2>
          <h2> {playerName2} : {player2} wins </h2>
          <h2> ties : {ties} </h2>
        </div>
      </div>
    );
  }
}

export default Navbar;