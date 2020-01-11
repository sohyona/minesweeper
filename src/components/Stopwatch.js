import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startTimer, resetTimer} from '../actions';

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

  const formatTimer = timer => {
    var sec_num = parseInt (timer, 10);
    var hours = Math.floor (sec_num / 3600);
    var minutes = Math.floor ((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <div>
      <h1>{formatTimer (timer)}</h1>
    </div>
  );
};

export default Stopwatch;
