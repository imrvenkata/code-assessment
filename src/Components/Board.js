import React from "react";
import "./../Styles/style.scss";
class Board extends React.Component {
  // generate tiles
  generateTiles = () => {
    let allTiles = [];
    for (let t = 0; t < 9; t++) {
      allTiles.push("tile not-played");
    }
    return allTiles;
  };

  handleClick = (event) => {
    const { handleScore, endgame } = this.props;
    let tile = event.target;
    if (tile.classList.length === 2) {
      this.play(tile);
    }

    let allTiles = document.getElementsByClassName("not-played");
    if (allTiles.length < 1) {
      handleScore("ties");
      endgame(true);
      this.reset();
    }
  };

  play = (tile) => {
    const { player1, player2, turn, handleScore, endgame } = this.props;
    tile.classList.remove("not-played");
    if (player1) {
      tile.innerHTML = "X";
      turn("player1", false, "player2", true);
      if (this.diagnol("X") || this.row("X") || this.column("X")) {
        handleScore("player1");
        endgame(true);
        this.reset();
      }
    }

    if (player2) {
      tile.innerHTML = "O";
      turn("player2", false, "player2", true);
      if (this.diagnol("O") || this.row("O") || this.column("O")) {
        handleScore("player2");
        endgame(true);
        this.reset();
      }
    }
  };

  /**
   * Possible wins in tictactoe board
   * 1. Diagnol
   * 2. Row
   * 3. Column
   *
   * Board - Tiles
   *
   *    0   1   2
   *    3   4   5
   *    6   7   8
   */

  /**
   * 
   * 
   *  Possible winning lines are
   *  [0, 1, 2]
   *  [3, 4, 5]
   *  [6, 7, 8]
   *  [0, 3, 6]
   *  [1, 4, 7]
   *  [2, 5, 8]
   *  [0, 4, 8]
   *  [2, 4, 6]
   *
   */

  /**
   *
   * @param {*} play
   * @returns true or false [win or not]
   * diagnol winning options are
   *    0       2
   *        4
   *    6       8
   * option1:   0   4   8
   * option2:   2   4   6
   */
  diagnol = (play) => {
    // calculating diagnol wins
    let left = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    let right = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];

    if (left[0] === play && left[1] === play && left[2] === play) {
      return true;
    }
    if (right[0] === play && right[1] === play && right[2] === play) {
      return true;
    }
    return false;
  };

  /**
   *
   * @param {*} play
   * @returns true or false [win or not]
   * row winning options are
   *    option1: 0   1   2
   *    option2: 3   4   5
   *    option3: 6   7   8
   * */
  row = (play) => {
    let row1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile2").innerHTML,
    ];

    let row2 = [
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile5").innerHTML,
    ];

    let row3 = [
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile7").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    if (row1[0] === play && row1[1] === play && row1[2] === play) {
      return true;
    }
    if (row2[0] === play && row2[1] === play && row2[2] === play) {
      return true;
    }
    if (row3[0] === play && row3[1] === play && row3[2] === play) {
      return true;
    }
    return false;
  };

  /**
   *
   * @param {*} play
   * @returns true or false [win or not]
   * column winning options are
   *    option1: 0   3   6
   *    option2: 1   4   7
   *    option3: 2   5   8
   * */
  column = (play) => {
    let column1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];

    let column2 = [
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile7").innerHTML,
    ];

    let column3 = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    if (column1[0] === play && column1[1] === play && column1[2] === play) {
      return true;
    }
    if (column2[0] === play && column2[1] === play && column2[2] === play) {
      return true;
    }
    if (column3[0] === play && column3[1] === play && column3[2] === play) {
      return true;
    }
    return false;
  };

  //   to reset the board
  reset = () => {
    let allTiles = document.getElementsByClassName("tile");
    for (let t = 0; t < allTiles.length; t++) {
      allTiles[t].innerHTML = "";
      allTiles[t].classList.add("not-played");
    }
    // generateTiles();
  };

  render() {
    return (
      <div className="board">
        {this.generateTiles().map((element, i) => {
          return (
            <div
              key={i}
              id={`tile${i}`}
              className={element}
              onClick={this.handleClick}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default Board;
