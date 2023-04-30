import React from 'react';
import videojs from 'video.js';
// This imports the functional component from the previous sample.
import VideoJS from './VideoJS';

function LoadVideoJS(props) {
  const playerRef = React.useRef(null);
  const url = props.url

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    "inactivityTimeout": 0,
    playbackRates: [0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.3, 1.4, 1.5, 2],
    fluid: true,
    sources: [{
      src: url,
      type: 'audio/mp3'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      
    </>
  );
}
export default LoadVideoJS;