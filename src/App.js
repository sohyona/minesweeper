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

  const gameOver = false;

  const handleClickEvent = (e, y, x) => {
    if (board[y][x].isMine) {
      alert ('지뢰입니다');
      return;
    }

    if (board[y][x].count > 0) {
      dispatch (openCell (y, x));
    } else {
      const openAllZeroCell = (y, x) => {
        dispatch (openCell (y, x));
        if (y === 0 || x === 0 || y > boardSize || x > boardSize) return;
        if (board[y][x].count > 0) return;
        console.log ('fill', y, x);

        // 지뢰이면 안가는거, 플래그이면 안가는거
        if (!board[y - 1][x - 1].isMine && !board[y - 1][x - 1].isOpen) {
          openAllZeroCell (y - 1, x - 1);
        }
        if (!board[y - 1][x].isMine && !board[y - 1][x].isOpen) {
          openAllZeroCell (y - 1, x);
        }
        if (!board[y - 1][x + 1].isMine && !board[y - 1][x + 1].isOpen) {
          openAllZeroCell (y - 1, x + 1);
        }
        if (!board[y][x - 1].isMine && !board[y][x - 1].isOpen) {
          openAllZeroCell (y, x - 1);
        }
        if (!board[y][x + 1].isMine && !board[y][x + 1].isOpen) {
          openAllZeroCell (y, x + 1);
        }
        if (!board[y + 1][x - 1].isMine && !board[y + 1][x - 1].isOpen) {
          openAllZeroCell (y + 1, x - 1);
        }
        if (!board[y + 1][x].isMine && !board[y + 1][x].isOpen) {
          openAllZeroCell (y + 1, x);
        }
        if (!board[y + 1][x + 1].isMine && !board[y + 1][x + 1].isOpen) {
          openAllZeroCell (y + 1, x + 1);
        }
      };
      openAllZeroCell (y, x);
    }
  };

  const handleRightClickEvent = (e, y, x) => {
    e.preventDefault ();
    if(board[y][x].isOpen) return;
    board[y][x].isFlag
      ? dispatch (increaseMineNumber ())
      : dispatch (decreaseMineNumber ());
    dispatch (toggleFlag (y, x)); // flag
  };

  return (
    <div className="App">
      <h1>Minsweeper</h1>
      <h3>Mines left: {numberOfMine}</h3>
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
                          handleRightClickEvent (e, rowIdx, cellIdx)}
                      >
                        {cell.isMine
                          ? '*'
                          : cell.count === 0 ? ' ' : cell.count}
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
