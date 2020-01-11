const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case 'RESET_TIMER':
      console.log ('RESET_TIMER');
      return 0;
    case 'START_TIMER':
      return state + 1;
    default:
      return state;
  }
};

export default timerReducer;
