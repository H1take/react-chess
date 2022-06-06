import React, { useState, useEffect } from "react";

import CellComponent from "./CellComponent";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({
  board,
  setBoard,
}): React.ReactElement => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
