import newBoard from './boardHelper';
const initialState = newBoard ();

const boardReducer = (state = initialState, action) => {
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
    case 'RESET_BOARD': {
      return newBoard ();
    }
    default:
      return state;
  }
};

export default boardReducer;
