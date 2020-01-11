import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  openCell,
  toggleFlag,
  increaseMineNumber,
  decreaseMineNumber,
  increaseOpenedCellNumber,
} from '../actions';
import {boardSize} from '../misc';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFlag} from '@fortawesome/free-solid-svg-icons';

const Cell = ({cell, rowIdx, cellIdx}) => {
  const dispatch = useDispatch ();

  const board = useSelector (state => state.board, []);

  const handleClickEvent = (y, x) => {
    if (board[y][x].isOpen) return;

    if (board[y][x].isMine) {
      alert ('지뢰입니다');
      return;
    }

    if (board[y][x].count > 0) {
      dispatch (openCell (y, x));
      dispatch (increaseOpenedCellNumber ());
    } else {
      const openAllZeroCell = (y, x) => {
        dispatch (openCell (y, x));

        if (y === 0 || x === 0 || y > boardSize || x > boardSize) return;

        dispatch (increaseOpenedCellNumber ());

        if (board[y][x].count > 0) return;

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
    if (board[y][x].isOpen) return;
    board[y][x].isFlag
      ? dispatch (increaseMineNumber ())
      : dispatch (decreaseMineNumber ());
    dispatch (toggleFlag (y, x)); // flag
  };

  return (
    <div
      className={`board-cell ${cell.isOpen ? 'opened' : cell.isFlag ? 'flagged' : 'closed'}`}
      key={`cell-${cellIdx}`}
      onClick={e => handleClickEvent (rowIdx, cellIdx)}
      onContextMenu={e => handleRightClickEvent (e, rowIdx, cellIdx)}
    >
      {/* {cell.isFlag
          ? <FontAwesomeIcon icon={faFlag} />
          : cell.isOpen ? cell.count : ' '} */}
      {cell.isMine ? '*' : cell.count === 0 ? ' ' : cell.count}
    </div>
  );
};

export default Cell;
