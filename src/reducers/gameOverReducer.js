const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case 'GAMEOVER': {
      return true;
    }
    case 'GAME_IN_PROGRESS': {
      return false;
    }
    default:
      return state;
  }
};

export default gameOverReducer;
