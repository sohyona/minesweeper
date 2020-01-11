const boardSize = 8;
const boardInit = [];
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

for (let i = 0; i < boardSize; i++) {
  boardInit.push ([]);
  for (let j = 0; j < boardSize; j++) {
    boardInit[i].push (cellData (i, j));
  }
}

const boardReducer = (state = boardInit, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boardReducer;