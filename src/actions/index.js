export const openCell = (y, x) => {
  return {
    type: 'OPEN_CELL',
    y: y,
    x: x,
  };
};

export const toggleFlag = (y, x) => {
  return {
    type: 'TOGGLE_FLAG',
    y: y,
    x: x,
  };
};

export const increaseMineNumber = () => {
  return {
    type: 'INCREASE_MINE_NUMBER',
  };
};

export const decreaseMineNumber = () => {
  return {
    type: 'DECREASE_MINE_NUMBER',
  };
};

export const increaseOpenedCellNumber = () => {
  return {
    type: 'INCREASE_OPENED_CELL_NUMBER',
  };
};

export const decreaseOpenedCellNumber = () => {
  return {
    type: 'DECREASE_OPENED_CELL_NUMBER',
  };
};

export const setGameOver = () => {
  return {
    type: 'GAMEOVER',
  };
};

export const resetBoard = () => {
  return {
    type: 'RESET_BOARD',
  };
};

export const setGameInProgress = () => {
  return {
    type: 'GAME_IN_PROGRESS',
  };
};
