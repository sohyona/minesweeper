import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {boardSize} from './misc';
import Cell from './components/Cell';

function App () {
  const board = useSelector (state => state.board, []);
  const count = useSelector (state => state.count);
  const numberOfMine = useSelector (state => state.mine);

  useEffect (
    () => {
      console.log ('count: ', count);
      console.log ('numberOfMine: ', numberOfMine);
    },
    [count, numberOfMine]
  );

  return (
    <div className="App">
      <h1>Minsweeper</h1>

      <h3>Remaining mines: {numberOfMine}</h3>
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
        </p>
        <p>App built by Hyona</p>
      </div>
    </div>
  );
}

export default App;
