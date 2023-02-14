import { SocialNetworkItemType } from "./SocialNetworks";
import cn from 'classnames';

type Props = {
  className?: string
} & SocialNetworkItemType

export const Item: React.FC<Props> = ({ src, to, alt, className }) => {
  return <a className={cn("social-networks__item w-5 h-5", className)} href={to} target='_blank' rel='noopener'>
    <img src={src} alt={alt} />
  </a>
};