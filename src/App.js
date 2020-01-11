import React, {useEffect, useCallback} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {boardSize, numberOfMine} from './misc';
import Board from './components/Board';
import Control from './components/Control';

function App () {
  const board = useSelector (state => state.board, []);
  const count = useSelector (state => state.count);
  const remainingMines = useSelector (state => state.mine);
  // const gameOver = useSelector (state => state.gameOver);

  const validateBoard = useCallback (
    () => {
      let validateCount = 0;
      for (let i = 1; i < boardSize + 1; i++) {
        for (let j = 1; j < boardSize + 1; j++) {
          if (board[i][j].isFlag && board[i][j].isMine) validateCount++;
        }
      }

      return validateCount === numberOfMine ? true : false;
    },
    [board]
  );

  useEffect (
    () => {
      if (remainingMines === 0 && count === boardSize * boardSize) {
        const validation = validateBoard ();
        alert (validation);
      }
    },
    [count, remainingMines, validateBoard]
  );

  return (
    <div className="App">
      <h1>Minsweeper</h1>

      <h3>Remaining mines: {remainingMines}</h3>
      
      <Board />
      <Control />

      <div className="footer">
        <p>
          This app is optimized for Chrome
          <br />App built by Hyona
        </p>
      </div>
    </div>
  );
}

export default App;
