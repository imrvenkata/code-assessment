import React from "react";
import "./../App.scss";
class Createplayers extends React.Component {
  state = {
    player1: "",
    player2: "",
  };

  handleChange = (event) => {
    let player = event.target.id;
    this.setState({ [player]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { player1, player2 } = this.state;
    // setting the player_names recieved from the form
    this.props.names(player1, player2);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="screen">
          <form>
            <div className="form-group">
              <label> Create player1</label>
              <input
                type="name"
                id="player1"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label> Create player2</label>
              <input
                type="name"
                id="player2"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Let's play
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Createplayers;
