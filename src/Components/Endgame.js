import React from "react";
import "./../App.scss";
class Endgame extends React.Component {
  state = {
    tied: "Game tied",
    playerWin: "Player win " + this.props.winner + " !",
  };

  handleClick = () => {
    this.props.endgame(false);
  };
  render() {
    const { winner } = this.props;
    const { tied, playerWin } = this.state;
    return (
      <div className="wrapper">
        <div className="screen">
          <p> {winner === "tied" ? tied : playerWin} </p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Would you like to replay the game?
          </button>
        </div>
      </div>
    );
  }
}

export default Endgame;
