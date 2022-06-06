import React, { useState } from "react";

import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

import "./App.css";
import { useEffect } from "react";

const App = (): React.ReactElement => {

  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells(); // инициализируем ячейки
    setBoard(newBoard) // помещаем их в стейт board
  }

  return(
    <div>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;