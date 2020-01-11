import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetBoard, setGameInProgress, setGameOver} from '../actions';

const Control = () => {
  const dispatch = useDispatch ();

  const handleRestart = () => {
    dispatch (resetBoard ());
    dispatch (setGameInProgress ());
  };

  return (
    <div className="control">
      <div className="btn-restart" onClick={() => handleRestart ()}>
        Restart
      </div>
    </div>
  );
};

export default Control;
