import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {boardSize} from './misc';

function App () {
  const board = useSelector (state => state.board);
  const dispatch = useDispatch ();

  return (
    <div className="App">
      <h1>Minsweeper</h1>
      <div className="board-container">
        {board.map ((row, rowIdx) => {
          if (rowIdx !== 0 && rowIdx !== boardSize + 1) {
            return (
              <div className="board-row" key={`row-${rowIdx}`}>
                {row.map ((cell, cellIdx) => {
                  if (cellIdx !== 0 && cellIdx !== boardSize + 1) {
                    console.log (rowIdx, cellIdx);
                    return (
                      <div className="board-cell" key={`cell-${cellIdx}`}>
                        {cell.isMine ? '*' : cell.count}
                      </div>
                    );
                  }
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
