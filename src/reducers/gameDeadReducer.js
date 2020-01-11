const gameDeadReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_DEAD': {
      return true;
    }
    case 'RESET': {
      return false;
    }
    default:
      return state;
  }
};

export default gameDeadReducer;
