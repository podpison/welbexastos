import { HeaderNavLinkType } from './NavLinks';
import './item.scss';
import cn from 'classnames';

type Props = {
  hash: string | undefined
} & HeaderNavLinkType

export const Item: React.FC<Props> = ({ name, to, hash }) => {
  let isActive = hash?.includes(to);

  return <a
    className={cn(
      "header__nav-link text12-16 font-medium h-fit transition-colors hover:text-white",
      isActive && 'text-white'
    )}
    href={`#${to}`}
  >
    {name}
  </a>
};