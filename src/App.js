import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {openCell, mineFound} from './actions';
import {boardSize} from './misc';

function App () {
  const board = useSelector (state => state.board);
  const numberOfMine = useSelector (state => state.mine);
  const dispatch = useDispatch ();

  return (
    <div className="App">
      <h1>Minsweeper</h1>
      <h3>{numberOfMine}</h3>
      <div className="board-container">
        {console.log (board)}
        {board.map ((row, rowIdx) => {
          if (rowIdx !== 0 && rowIdx !== boardSize + 1) {
            return (
              <div className="board-row" key={`row-${rowIdx}`}>
                {row.map ((cell, cellIdx) => {
                  if (cellIdx !== 0 && cellIdx !== boardSize + 1) {
                    return (
                      <div
                        className={`board-cell ${cell.isOpen ? 'opened' : 'closed'}`}
                        key={`cell-${cellIdx}`}
                        onClick={() => {
                          dispatch (openCell (rowIdx, cellIdx));
                          dispatch (mineFound ());
                        }}
                      >
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
