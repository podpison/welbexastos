import './styles.scss';
import cn from 'classnames';

type Props = {
  color: 'red' | 'yellow' | 'purple'
  className?: string
}

export const Ball: React.FC<Props> = ({ color, className }) => {
  let colorClass = `ball-${color}`;

  return <div className={cn('ball -z-30 absolute rounded-full', className, colorClass)}>
    
  </div>
};