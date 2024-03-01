/**
 *
 * @returns Create board dynamic
 * events to cell
 * Game changer
 * Winner logic
 *
 */

import react, { useState, useEffect } from "react";
const winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const TicTocToe = () => {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: null, state: null });

  useEffect(() => {
    if (result.winner !== null) {
      alert("Player", player, "Has Won!!");
    }
  }, [result]);

  useEffect(() => {
    checkWin();
    // checkTie();
    setPlayer(player == "X" ? "O" : "X");
  }, [square]);

  const addValue = (id) => {
    const newArray = square.map((val, index) => {
      if (index === id && val !== "") return;
      if (index === id && val === "") {
        return player;
      }
      return val;
    });
    return newArray;
  };

  const handleClicked = (id) => {
    if (square[id] !== "") {
      return;
    }
    setSquare(addValue(id));
  };

  const checkWin = () => {
    winnerPatterns.forEach((currPattern) => {
      const firstPlayer = square[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (square[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    square.forEach((item) => {
      if (item === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const startGame = () => {
    setSquare(["", "", "", "", "", "", "", "", ""]);
    setResult({ state: null, winner: null });
  };

  return (
    <div className="game-container">
      <h3>Tic Toc Toe Game</h3>
      <h4>Player {player} Turn</h4>

      <h4>
        Player {result.winner} has {result.state}
      </h4>

      <div className="row">
        <Square value={square[0]} onSquareClick={() => handleClicked(0)} />
        <Square value={square[1]} onSquareClick={() => handleClicked(1)} />
        <Square value={square[2]} onSquareClick={() => handleClicked(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={() => handleClicked(3)} />
        <Square value={square[4]} onSquareClick={() => handleClicked(4)} />
        <Square value={square[5]} onSquareClick={() => handleClicked(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={() => handleClicked(6)} />
        <Square value={square[7]} onSquareClick={() => handleClicked(7)} />
        <Square value={square[8]} onSquareClick={() => handleClicked(8)} />
      </div>

      <button
        onClick={() => {
          startGame();
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTocToe;
