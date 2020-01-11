import {numberOfMine} from '../misc';

const mineReducer = (state = numberOfMine, action) => {
  switch (action.type) {
    case 'DECREASE':
      return state - 1;
    case 'INCREASE':
      return state + 1;
    default:
      return state;
  }
};

export default mineReducer;
