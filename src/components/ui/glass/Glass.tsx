import cn from 'classnames';
import './styles.scss';

type Props = {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export const Glass: React.FC<Props> = ({ className, children, style }) => {
  return <div className={cn('glass absolute -z-10', className)} style={style}>
    {children}
  </div>
};