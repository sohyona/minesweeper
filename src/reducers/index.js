import counterReducer from './counter';
import loggedReducer from './isLogged';
import boardReducer from './board';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
  counter: counterReducer,
  isLogged: loggedReducer,
  board: boardReducer,
});

export default allReducers;
