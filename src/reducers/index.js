import boardReducer from './boardReducer';
import mineReducer from './mineReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  board: boardReducer,
  mine: mineReducer
});

export default allReducers;
