const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_OPENED_CELL_NUMBER': {
      return state + 1;
    }
    case 'DECREASE_OPENED_CELL_NUMBER': {
      return state - 1;
    }
    default:
      return state;
  }
};

export default countReducer;
