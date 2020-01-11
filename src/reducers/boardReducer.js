import initBoard from './boardHelper';

const boardReducer = (state = initBoard, action) => {
  switch (action.type) {
    case 'OPEN_CELL': {
      let newState = state;
      newState[action.y][action.x].isOpen = true;
      return newState;
    }
    case 'TOGGLE_FLAG': {
      let newState = state;
      newState[action.y][action.x].isFlag = !newState[action.y][action.x]
        .isFlag;
      return newState;
    }
    default:
      return state;
  }
};

export default boardReducer;
