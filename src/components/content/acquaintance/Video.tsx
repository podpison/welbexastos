import YouTube, { YouTubeProps } from 'react-youtube';

export const Video: React.FC = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube className='w-full max-w-[560px] h-[calc(100%_-_70px)] mt-auto sm:col-[1] sm:row-[2] sm:h-full' videoId="JqSJaqySbKI" opts={opts} onReady={onPlayerReady} />;
};