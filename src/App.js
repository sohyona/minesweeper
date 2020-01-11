import React, {useEffect, useCallback} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {boardSize, numberOfMine} from './misc';
import Cell from './components/Cell';

function App () {
  const board = useSelector (state => state.board, []);
  const count = useSelector (state => state.count);
  const remainingMines = useSelector (state => state.mine);

  const validateBoard = useCallback (() => {
    let validateCount = 0;
    for (let i = 1; i < boardSize + 1; i++) {
      for (let j = 1; j < boardSize + 1; j++) {
        if (board[i][j].isFlag && board[i][j].isMine) validateCount++;
      }
    }

    return validateCount === numberOfMine ? true : false;
  }, [board]);

  useEffect (
    () => {
      console.log ('count: ', count);
      console.log ('remainingMines: ', remainingMines);
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
      <div className="board-container">
        {board.map ((row, rowIdx) => {
          if (rowIdx !== 0 && rowIdx !== boardSize + 1) {
            return (
              <div className="board-row" key={`row-${rowIdx}`}>
                {row.map ((cell, cellIdx) => {
                  if (cellIdx !== 0 && cellIdx !== boardSize + 1)
                    return (
                      <Cell
                        cell={cell}
                        key={`${rowIdx}-${cellIdx}`}
                        rowIdx={rowIdx}
                        cellIdx={cellIdx}
                      />
                    );
                })}
              </div>
            );
          }
        })}
      </div>
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
