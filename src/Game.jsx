import React from "react";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      isNext: true,
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick = (i) => {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let squares = history[history.length - 1].squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      isNext: !this.state.isNext,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  render() {
    const hitory = this.state.history;
    let currentSquare = hitory[this.state.stepNumber];
    let status;
    const winner = this.calculateWinner(currentSquare.squares);
    if (winner) {
      status = "Winner is : " + winner;
    } else {
      status = "Next player : " + (this.state.isNext ? "X" : "O");
    }

    return (
      <div className="game">
        <GameInfo
          status={status}
          history={this.state.history}
          onClick={(i) => this.jumpTo(i)}
        />
        <GameBoard
          squares={currentSquare.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
}

export default Game;
