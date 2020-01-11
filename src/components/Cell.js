import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import swal from '@sweetalert/with-react';
import {
  openCell,
  toggleFlag,
  increaseMineNumber,
  decreaseMineNumber,
  increaseOpenedCellNumber,
  decreaseOpenedCellNumber,
  setGameOver,
  setDead,
} from '../actions';
import {boardSize} from '../misc';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFlag, faBomb} from '@fortawesome/free-solid-svg-icons';

const Cell = ({cell, rowIdx, cellIdx}) => {
  const dispatch = useDispatch ();

  const board = useSelector (state => state.board, []);
  const numberOfMine = useSelector (state => state.mine);
  const gameOver = useSelector (state => state.gameOver);
  const isDead = useSelector (state => state.isDead);

  // 왼쪽 클릭시
  const handleClickEvent = (y, x) => {
    if (board[y][x].isOpen || gameOver) return;

    // 지뢰 클릭시
    if (board[y][x].isMine) {
      swal ('실패! 다시 도전해주세요.');
      dispatch (setDead ());
      dispatch (openCell (y, x));
      dispatch (setGameOver ());
      return;
    }

    // 지뢰가 아니고 카운트가 0보다 클때
    if (board[y][x].count > 0) {
      dispatch (openCell (y, x));
      dispatch (increaseOpenedCellNumber ());
    } else {
      // 0을 클릭시 자동으로 펼쳐지는 재귀 함수
      const openAllZeroCell = (y, x) => {
        if (board[y][x].isFlag) return;
        dispatch (openCell (y, x));

        // 초반에 세팅했던 boundary는 무시한다
        if (y === 0 || x === 0 || y > boardSize || x > boardSize) return;

        dispatch (increaseOpenedCellNumber ());
        // 0이 아니면 종료
        if (board[y][x].count > 0) return;

        // 주변 0을 모두 열기
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

  // 오른쪽 클릭(flag)시
  const handleRightClickEvent = (e, y, x) => {
    e.preventDefault (); // 네이티브 오른쪽 클릭 방지

    if (board[y][x].isOpen || gameOver) return;

    if (board[y][x].isFlag) {
      dispatch (decreaseOpenedCellNumber ());
      dispatch (increaseMineNumber ());
    } else {
      if (numberOfMine < 1) return;
      dispatch (increaseOpenedCellNumber ());
      dispatch (decreaseMineNumber ());
    }

    dispatch (toggleFlag (y, x));
  };

  // cell 안에 보여줄 내용
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
      className={`board-cell ${isDead ? 'dead' : ''} ${cell.isOpen ? 'opened' : cell.isFlag ? 'flagged' : 'closed'}`}
      key={`cell-${cellIdx}`}
      onClick={() => handleClickEvent (rowIdx, cellIdx)}
      onContextMenu={e => handleRightClickEvent (e, rowIdx, cellIdx)}
    >
      <CellContent cell={cell} />
    </div>
  );
};

export default Cell;
