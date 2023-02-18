import './styles.scss';
import cn from 'classnames';

export type BallProps = {
  color: 'red' | 'yellow' | 'purple'
  className?: string
  zIndex?: string
  style?: React.CSSProperties
  ballRef?: React.RefObject<HTMLDivElement>
}

export const Ball: React.FC<BallProps> = ({ color, className, zIndex, style, ballRef }) => {
  return <div
    className={cn('ball absolute rounded-full', className, `ball-${color}`, zIndex ? zIndex : '-z-30')}
    style={style}
    ref={ballRef}
  >

  </div>
};