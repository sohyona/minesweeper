import React from 'react';
import {useSelector} from 'react-redux';
import Cell from './Cell';
import {boardSize} from '../misc';

const Board = () => {
  const board = useSelector (state => state.board, []);

  return (
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
  );
};

export default Board;
