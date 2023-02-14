import './styles.scss';
import cn from 'classnames';

type Props = {
  color: 'red' | 'yellow' | 'purple'
  className?: string
  zIndex?: string
}

export const Ball: React.FC<Props> = ({ color, className, zIndex }) => {
  let colorClass = `ball-${color}`;

  return <div className={cn('ball absolute rounded-full', className, colorClass, zIndex ? zIndex : '-z-30')}>
    
  </div>
};