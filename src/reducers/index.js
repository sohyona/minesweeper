import boardReducer from './boardReducer';
import mineReducer from './mineReducer';
import countReducer from './countReducer';
import gameOverReducer from './gameOverReducer';
import timerReducer from './timerReducer';
import gameDeadReducer from './gameDeadReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  board: boardReducer,
  mine: mineReducer,
  count: countReducer,
  gameOver: gameOverReducer,
  timerReducer: timerReducer,
  isDead: gameDeadReducer,
});

export default allReducers;
