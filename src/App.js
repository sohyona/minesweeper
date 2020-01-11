import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {
  openCell,
  toggleFlag,
  increaseMineNumber,
  decreaseMineNumber,
} from './actions';
import {boardSize} from './misc';

function App () {
  const board = useSelector (state => state.board, []);
  const numberOfMine = useSelector (state => state.mine);
  const dispatch = useDispatch ();

  const handleClickEvent = (e, y, x) => {
    if (e.type === 'click') {
      if (board[y][x].isMine) {
        alert ('지뢰입니다');
        return;
      }
      dispatch (openCell (y, x));
    } else if (e.type === 'contextmenu') {
      board[y][x].isFlag 
        ? dispatch (increaseMineNumber ())
        : dispatch (decreaseMineNumber ());
      dispatch (toggleFlag (y, x)); // flag
    }
  };

  return (
    <div className="App">
      <h1>Minsweeper</h1>
      <h3>{numberOfMine}</h3>
      <div className="board-container">
        {board.map ((row, rowIdx) => {
          if (rowIdx !== 0 && rowIdx !== boardSize + 1) {
            return (
              <div className="board-row" key={`row-${rowIdx}`}>
                {row.map ((cell, cellIdx) => {
                  if (cellIdx !== 0 && cellIdx !== boardSize + 1) {
                    return (
                      <div
                        className={`board-cell ${cell.isOpen ? 'opened' : cell.isFlag ? 'flagged' : 'closed'}`}
                        key={`cell-${cellIdx}`}
                        onClick={e => handleClickEvent (e, rowIdx, cellIdx)}
                        onContextMenu={e =>
                          handleClickEvent (e, rowIdx, cellIdx)}
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
