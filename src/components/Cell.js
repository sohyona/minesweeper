import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  openCell,
  toggleFlag,
  increaseMineNumber,
  decreaseMineNumber,
  increaseOpenedCellNumber,
  decreaseOpenedCellNumber,
  setGameOver,
} from '../actions';
import {boardSize} from '../misc';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFlag, faBomb} from '@fortawesome/free-solid-svg-icons';

const Cell = ({cell, rowIdx, cellIdx}) => {
  const dispatch = useDispatch ();

  const board = useSelector (state => state.board, []);
  const numberOfMine = useSelector (state => state.mine);
  const gameOver = useSelector (state => state.gameOver);

  const handleClickEvent = (y, x) => {
    if (board[y][x].isOpen || gameOver) return;

    if (board[y][x].isMine) {
      dispatch (openCell (y, x));
      dispatch (setGameOver ());
      return;
    }

    if (board[y][x].count > 0) {
      dispatch (openCell (y, x));
      dispatch (increaseOpenedCellNumber ());
    } else {
      const openAllZeroCell = (y, x) => {
        if (board[y][x].isFlag) return;
        dispatch (openCell (y, x));

        if (y === 0 || x === 0 || y > boardSize || x > boardSize) return;

        dispatch (increaseOpenedCellNumber ());

        if (board[y][x].count > 0) return;

        // 지뢰이면 안가는거, 플래그이면 안가는거
        if (!board[y - 1][x - 1].isOpen) {
          openAllZeroCell (y - 1, x - 1);
        }
        if (!board[y - 1][x].isOpen) {
          openAllZeroCell (y - 1, x);
        }
        if (!board[y - 1][x + 1].isOpen) {
          openAllZeroCell (y - 1, x + 1);
        }
        if (!board[y][x - 1].isOpen) {
          openAllZeroCell (y, x - 1);
        }
        if (!board[y][x + 1].isOpen) {
          openAllZeroCell (y, x + 1);
        }
        if (!board[y + 1][x - 1].isOpen) {
          openAllZeroCell (y + 1, x - 1);
        }
        if (!board[y + 1][x].isOpen) {
          openAllZeroCell (y + 1, x);
        }
        if (!board[y + 1][x + 1].isOpen) {
          openAllZeroCell (y + 1, x + 1);
        }
      };
      openAllZeroCell (y, x);
    }
  };

  const handleRightClickEvent = (e, y, x) => {
    e.preventDefault ();
    if (board[y][x].isOpen || gameOver) return;
    if (board[y][x].isFlag) {
      dispatch (decreaseOpenedCellNumber ());
      dispatch (increaseMineNumber ());
    } else {
      if (numberOfMine < 1) return;
      dispatch (increaseOpenedCellNumber ());
      dispatch (decreaseMineNumber ());
    }

    dispatch (toggleFlag (y, x)); // flag
  };

  const CellContent = ({cell}) => {
    if (cell.isFlag) {
      return <FontAwesomeIcon icon={faFlag} />;
    } else if (cell.isOpen) {
      if (cell.isMine) {
        return <FontAwesomeIcon icon={faBomb} />;
      } else {
        if (cell.count > 0) {
          return cell.count;
        }
      }
    }
    return ' ';
  };

  return (
    <div
      className={`board-cell ${gameOver ? 'gameover' : ''} ${cell.isOpen ? 'opened' : cell.isFlag ? 'flagged' : 'closed'}`}
      key={`cell-${cellIdx}`}
      onClick={() => handleClickEvent (rowIdx, cellIdx)}
      onContextMenu={e => handleRightClickEvent (e, rowIdx, cellIdx)}
      //   onDoubleClick={() => alert ('double click')}
    >
      <CellContent cell={cell} />
      {/* {cell.isFlag
            ? <FontAwesomeIcon icon={faFlag} />
            : cell.isOpen ? cell.count === 0 ? ' ' : cell.count : ' '} */}
      {/* {cell.isMine ? '*' : cell.count === 0 ? ' ' : cell.count} */}
    </div>
  );
};

export default Cell;
