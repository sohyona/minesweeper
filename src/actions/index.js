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

export const resetMineNumber = () => {
  return {
    type: 'RESET_MINE_NUMBER',
  };
};

export const resetCellNumber = () => {
  return {
    type: 'RESET_CELL_NUMBER',
  };
};

export const setGameInProgress = () => {
  return {
    type: 'GAME_IN_PROGRESS',
  };
};

export const startTimer = () => {
  return {
    type: 'START_TIMER',
  };
};

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER',
  };
};

export const setDead = () => {
  return {
    type: 'SET_DEAD',
  };
};

export const resetDead = () => {
  return {
    type: 'RESET',
  };
};
