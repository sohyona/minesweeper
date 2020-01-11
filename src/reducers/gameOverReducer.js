const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case 'GAMEOVER': {
      return true;
    }
    default:
      return state;
  }
};

export default gameOverReducer;
