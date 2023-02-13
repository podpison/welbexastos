import { SocialNetworkItemType } from "./SocialNetworks";

type Props = {

} & SocialNetworkItemType

export const Item: React.FC<Props> = ({ src, to, alt }) => {
  return <a className="social-networks__item w-5 h-5" href={to} target='_blank' rel='noopener'>
    <img src={src} alt={alt} />
  </a>
};