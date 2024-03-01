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
  const { clickHandler, value } = props.infoProps;
  console.log(props);
  return (
    <button className="col square" onClick={clickHandler}>
      {value}
    </button>
  );
};

const RowSquare = (props) => {
  const { gridSize, infoProps } = props;

  const colArray = Array(gridSize).fill(null);
  return (
    <div className="row">
      {colArray.map((item, colIdx) => (
        <Square infoProps={{ ...infoProps, colIdx }} />
      ))}
    </div>
  );
};

const Board = (props) => {
  const { gridSize } = props;
  const rowArray = Array(gridSize).fill(null);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [value, setValue] = useState(null);

  const clickHandler = (id) => {
    console.log("CLick triggered");
  };

  return (
    <>
      {rowArray.map((item, rowIndex) => (
        <RowSquare
          gridSize={gridSize}
          infoProps={{ clickHandler, value, rowIndex }}
        />
      ))}
    </>
  );
};

const TicTocToe = () => {
  return (
    <div className="game-container">
      <h3>Tic Toc Toe Game</h3>
      <Board gridSize={3} />
    </div>
  );
};

export default TicTocToe;
