import cn from 'classnames';
import './styles.scss';

type Props = {
  className?: string
  children?: React.ReactNode
}

export const Glass: React.FC<Props> = ({ className, children }) => {
  return <div className={cn('glass absolute -z-10', className)}>
    {children}
  </div>
};