import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetBoard,
  setGameInProgress,
  resetTimer,
  resetMineNumber,
  resetCellNumber,
  resetDead,
} from '../actions';
import Stopwatch from './Stopwatch';

const Control = () => {
  const dispatch = useDispatch ();

  const handleRestart = () => {
    dispatch (resetBoard ());
    dispatch (setGameInProgress ());
    dispatch (resetTimer ());
    dispatch (resetMineNumber ());
    dispatch (resetCellNumber ());
    dispatch (resetDead ());
  };

  return (
    <div className="control">
      <Stopwatch />
      <div className="btn-restart" onClick={() => handleRestart ()}>
        Restart
      </div>
    </div>
  );
};

export default Control;
