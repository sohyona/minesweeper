import {numberOfMine} from '../misc';

const mineReducer = (state = numberOfMine, action) => {
  switch (action.type) {
    case 'DECREASE_MINE_NUMBER':
      return state - 1;
    case 'INCREASE_MINE_NUMBER':
      return state + 1;
    case 'RESET_MINE_NUMBER':
      return numberOfMine;
    default:
      return state;
  }
};

export default mineReducer;
