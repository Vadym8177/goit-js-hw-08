import Player from '@vimeo/player';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

player.on('timeupdate', onPlay);

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
