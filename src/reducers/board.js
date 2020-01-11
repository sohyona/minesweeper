import {boardSize, numberOfMine} from '../misc';

const numberOfRow = boardSize;
const numberOfCell = boardSize;
const sizeOfBoundary = 2;
const initBoard = [];
const cellData = (
  y,
  x,
  isFlag = false,
  isMine = false,
  isOpen = false,
  count = 0
) => {
  return {
    y: y,
    x: x,
    isFlag: isFlag,
    isMine: isMine,
    isOpen: isOpen,
    count: count,
  };
};

// init board to start game
for (let i = 0; i < numberOfRow + sizeOfBoundary; i++) {
  initBoard.push ([]);
  for (let j = 0; j < numberOfCell + sizeOfBoundary; j++) {
    initBoard[i].push (cellData (i, j));
  }
}

// set mine
for (let i = 0; i < numberOfMine; i++) {
  const y = Math.floor (Math.random (1) * numberOfRow + 1);
  const x = Math.floor (Math.random (1) * numberOfCell + 1);
  console.log ('mine location', y, x);

  // 지뢰가 이미 존재하는 경우
  if (initBoard[y][x].isMine) {
    i--;
    continue;
  }
  initBoard[y][x].isMine = true;

  if (!initBoard[y - 1][x - 1].isMine) {
    initBoard[y - 1][x - 1].count++;
  }
  if (!initBoard[y - 1][x].isMine) {
    initBoard[y - 1][x].count++;
  }
  if (!initBoard[y - 1][x + 1].isMine) {
    initBoard[y - 1][x + 1].count++;
  }
  if (!initBoard[y][x - 1].isMine) {
    initBoard[y][x - 1].count++;
  }
  if (!initBoard[y][x + 1].isMine) {
    initBoard[y][x + 1].count++;
  }
  if (!initBoard[y + 1][x - 1].isMine) {
    initBoard[y + 1][x - 1].count++;
  }
  if (!initBoard[y + 1][x].isMine) {
    initBoard[y + 1][x].count++;
  }
  if (!initBoard[y + 1][x + 1].isMine) {
    initBoard[y + 1][x + 1].count++;
  }
}

const boardReducer = (state = initBoard, action) => {
  switch (action.type) {
    case 'OPEN_CELL':
      let newState = state;
      newState[action.y][action.x].isOpen = true;
      return state;
    default:
      return state;
  }
};

export default boardReducer;
