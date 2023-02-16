import cn from 'classnames';
import { useLocation } from 'react-router-dom';

type Props = {
  to: string
  name?: string
  children?: React.ReactNode
  className?: string
}

export const HashLink: React.FC<Props> = ({ name, to, children, className }) => {
  const { hash } = useLocation();

  let isActive = hash?.includes(to);

  return <a
    className={cn(
      "font-medium h-fit transition-colors hover:text-white",
      isActive && 'text-white',
      className
    )}
    href={`#${to}`}
  >
    {name || children}
  </a>
};