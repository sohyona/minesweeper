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
// 주변 값들을 확인하는 로직을 간편화 하기위해 여백값을 넣었습니다
for (let i = 0; i < numberOfRow + sizeOfBoundary; i++) {
  initBoard.push ([]);
  for (let j = 0; j < numberOfCell + sizeOfBoundary; j++) {
    initBoard[i].push (cellData (i, j));
  }
}

// 지뢰 설치
for (let i = 0; i < numberOfMine; i++) {
  const y = Math.floor (Math.random (1) * numberOfRow + 1);
  const x = Math.floor (Math.random (1) * numberOfCell + 1);

  // 지뢰가 이미 존재하는 경우
  if (initBoard[y][x].isMine) {
    i--;
    continue;
  }
  initBoard[y][x].isMine = true;

  // 주변 값들을 확인하는 로직입니다.
  // 만약에 0부터 시작하게되면 주변값을 확인할때
  // 에러가 나기 때문에 상단에서 여백값을 넣은 것입니다
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

export default initBoard;