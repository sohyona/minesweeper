import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function App () {
  const board = useSelector (state => state.board);
  const dispatch = useDispatch ();

  return (
    <div className="App">
      {console.log (board)}
    </div>
  );
}

export default App;
