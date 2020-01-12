import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startTimer} from '../actions';
import {formatTimer} from '../misc';

const Stopwatch = () => {
  const dispatch = useDispatch ();
  const timer = useSelector (state => state.timerReducer);
  const gameOver = useSelector (state => state.gameOver);

  useEffect (
    () => {
      const timeTickFunc = () => dispatch (startTimer ());
      const timeInterval = setInterval (timeTickFunc, 1000);
      if (gameOver) clearInterval (timeInterval);

      return () => {
        clearInterval (timeInterval);
      };
    },
    [dispatch, gameOver]
  );

  return (
    <div>
      <h1>{formatTimer (timer)}</h1>
    </div>
  );
};

export default Stopwatch;
