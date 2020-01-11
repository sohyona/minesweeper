import boardReducer from './boardReducer';
import mineReducer from './mineReducer';
import countReducer from './countReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  board: boardReducer,
  mine: mineReducer,
  count: countReducer,
});

export default allReducers;
