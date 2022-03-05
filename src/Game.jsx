import React from "react";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <GameInfo />
        <div className="game-board">
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default Game;
