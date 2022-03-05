import React from "react";

class GameInfo extends React.Component {
  render() {
    let moves = this.props.history.map((step, move) => {
      const description = move ? "Go to step # " + move : "Go to game start";
      return (
        <li key={move}>
          <button className="btn-info" onClick={() => this.props.onClick(move)}>
            {description}
          </button>
        </li>
      );
    });
    return (
      <div className="game-info">
        <div>{this.props.status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }
}

export default GameInfo;
