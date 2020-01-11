export const openCell = (y, x) => {
  return {
    type: 'OPEN_CELL',
    y: y,
    x: x,
  };
};

export const mineFound = () => {
  return {
    type: 'DECREASE',
  };
};
