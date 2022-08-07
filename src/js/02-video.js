import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
const currentTimeParsed = JSON.parse(currentTime);

player
  .setCurrentTime(currentTimeParsed.seconds)
  .then(function (seconds) {
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

