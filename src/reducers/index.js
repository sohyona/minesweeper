import boardReducer from './boardReducer';
import mineReducer from './mineReducer';
import countReducer from './countReducer';
import gameOverReducer from './gameOverReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  board: boardReducer,
  mine: mineReducer,
  count: countReducer,
  gameOver: gameOverReducer,
});

export default allReducers;
