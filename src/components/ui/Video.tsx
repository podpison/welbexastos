import YouTube, { YouTubeProps } from 'react-youtube';
import cn from 'classnames';

type Props = {
  className: string
  videoId: string
}

export const Video: React.FC<Props> = ({ className, videoId }) => {
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

  return <YouTube className={cn('w-full', className)} videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};