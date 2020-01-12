export const boardSize = 8;
export const numberOfMine = 8;

export const ranklist = [
  {username: '동백이', time: 80},
  {username: '용식이', time: 197},
  {username: '필구', time: 140},
  {username: '향미', time: 123},
  {username: '규태', time: 999},
  {username: '홍자영', time: 43},
];

export const formatTimer = timer => {
    var sec_num = parseInt (timer, 10);
    var hours = Math.floor (sec_num / 3600);
    var minutes = Math.floor ((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;


    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };