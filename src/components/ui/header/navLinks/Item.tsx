import { HeaderNavLinkType } from './NavLinks';
import './item.scss';

type Props = {

} & HeaderNavLinkType

export const Item: React.FC<Props> = ({ name, to }) => {
  return <a className="header__nav-link text12-16 font-medium h-fit" href={`#${to}`}>{name}</a>
};