import boardReducer from './board';
import mineReducer from './mine';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  board: boardReducer,
  mine: mineReducer
});

export default allReducers;
