import React from 'react';
import {ranklist} from '../misc';
import {formatTimer} from '../misc';

const Rank = () => {
  const sortRank = ranklist.sort ((a, b) => {
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
    return 0;
  });

  return (
    <div className="rank">
      <div className="rank-item">
        <div>Username</div><div>Time</div>
      </div>
      {sortRank.map ((data, idx) => (
        <div
          className={`rank-item ${data.username === '김항우' ? 'winner' : ''}`}
          key={idx}
        >
          <div>{data.username}</div><div>{formatTimer (data.time)}</div>
        </div>
      ))}
    </div>
  );
};

export default Rank;
