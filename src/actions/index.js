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

