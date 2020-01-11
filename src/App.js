import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function App () {
  const counter = useSelector (state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}> increment </button>
    </div>
  );
}

export default App;
