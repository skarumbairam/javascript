/**
 *
 * @returns Create board dynamic
 * events to cell
 * Game changer
 * Winner logic
 *
 */

import react, { useState } from "react";

const Square = (props) => {
  const { value, onSquareClick } = props;
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Board = () => {
    const [row, setRow] = useState(Array(3).fill(null))
    return <div>
        {
             row.map( (item) => <Square />)
        }
    </div>
}

const TicTocToe = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClicked = (i) => {
    if (square[i]) {
      return;
    }

    const nextSquare = square.slice(); // IMmportant not mutuating original state
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquare(nextSquare);
    setXIsNext(!xIsNext);
    getWinner(square);
  };

  return (
    <div className="game-container">
      <h3>Tic Toc Toe Game</h3>
      <h4>Winner is : </h4>
      <p>Next Player is : {xIsNext ? "X" : "O"}</p>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClicked(0)} />
        <Square value={square[1]} onSquareClick={() => handleClicked(1)} />
        <Square value={square[2]} onSquareClick={() => handleClicked(2)} />
      </div>

      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClicked(3)} />
        <Square value={square[4]} onSquareClick={() => handleClicked(4)} />
        <Square value={square[5]} onSquareClick={() => handleClicked(5)} />
      </div>

      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClicked(6)} />
        <Square value={square[7]} onSquareClick={() => handleClicked(7)} />
        <Square value={square[8]} onSquareClick={() => handleClicked(8)} />
      </div>
    </div>
  );
};

function getWinner(squares) {
  console.log("squares", squares);
  // check row
  for (i = 0; i < 3; i++) {
    if(checkLine())
  }
}

function checkLine(arr) {
  return arr.every((data) => arr[0] === data && data !== undefined);
}
export default TicTocToe;
