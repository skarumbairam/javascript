import { useEffect, useState } from "react";
import { Patterns } from "../util/data";
const TicTocComponent = () => {
  return (
    <div className="tictocContainer">
      <Board />
    </div>
  );
};
export default TicTocComponent;

const Square = ({ value, squareClick, index }) => {
  const clickHandler = () => {
    squareClick(index);
  };

  return (
    <div
      className="square"
      onClick={() => {
        clickHandler();
      }}
    >
      {value}
    </div>
  );
};

const Board = () => {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", status: "none" });

  useEffect(() => {
    checkWinner();
    changePlayer();
  }, [square]);

  const changePlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    return player;
  };

  const boardClick = (currId) => {
    if (square[currId] !== "") return;
    setSquare(
      square.map((item, idx) => {
        if (idx == currId && item == "") {
          return player;
        }
        return item;
      })
    );
  };

  const resetGame = () => {
    setResult({ winner: "none", status: "none" });
    setPlayer("O");
    setSquare(Array(9).fill(""));
  };

  const checkWinner = () => {
    Patterns.forEach((currentPattern) => {
      const currentPlayer = square[currentPattern[0]];
      if (currentPlayer === "") return;
      let foundWinner = true;
      currentPattern.forEach((el) => {
        if (square[el] !== currentPlayer) {
          foundWinner = false;
        }
      });
      if (foundWinner) {
        setResult({ winner: player, status: "Won" });
      }
    });
  };

  return (
    <div>
      {result.status !== "none" && <h5>The winner is {result.winner}</h5>}

      <div className="row">
        <Square value={square[0]} squareClick={boardClick} index={0} />
        <Square value={square[1]} squareClick={boardClick} index={1} />
        <Square value={square[2]} squareClick={boardClick} index={2} />
      </div>
      <div className="row">
        <Square value={square[3]} squareClick={boardClick} index={3} />
        <Square value={square[4]} squareClick={boardClick} index={4} />
        <Square value={square[5]} squareClick={boardClick} index={5} />
      </div>
      <div className="row">
        <Square value={square[6]} squareClick={boardClick} index={6} />
        <Square value={square[7]} squareClick={boardClick} index={7} />
        <Square value={square[8]} squareClick={boardClick} index={8} />
      </div>

      <button className="btn" onClick={() => resetGame()}>
        {" "}
        Starg Game{" "}
      </button>
    </div>
  );
};
