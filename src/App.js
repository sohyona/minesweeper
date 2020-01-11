import React, {useEffect, useCallback, useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import swal from '@sweetalert/with-react';
import {boardSize, numberOfMine} from './misc';
import {setGameOver} from './actions';
import Board from './components/Board';
import Control from './components/Control';

const App = () => {
  const dispatch = useDispatch ();

  const board = useSelector (state => state.board, []);
  const numberOfOpenedCell = useSelector (state => state.count);
  const remainingMines = useSelector (state => state.mine);

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
      if (
        remainingMines === 0 &&
        numberOfOpenedCell === boardSize * boardSize
      ) {
        const validation = validateBoard ();

        if (validation === true) {
          swal ('성공!!! 짝짝짝!!!');
          dispatch (setGameOver ());
        } else {
          swal ('실패! 다시 도전해주세요');
          dispatch (setGameOver ());
        }
      }
    },
    [numberOfOpenedCell, dispatch, remainingMines, validateBoard]
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
};

export default App;
