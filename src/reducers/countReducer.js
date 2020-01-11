const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_OPENED_CELL_NUMBER': {
      return state + 1;
    }
    case 'DECREASE_OPENED_CELL_NUMBER': {
      return state - 1;
    }
    case 'RESET_CELL_NUMBER': {
      return 0;
    }
    default:
      return state;
  }
};

export default countReducer;
