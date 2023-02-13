import telegram from '../../../assets/imgs/social networks/telegram.svg';
import viber from '../../../assets/imgs/social networks/viber.svg';
import whatsapp from '../../../assets/imgs/social networks/whatsapp.svg';
import { Item } from './Item';
import './styles.scss';
import cn from 'classnames';

const items = [
  {
    src: telegram,
    to: 'https://web.telegram.org/',
    alt: 'телеграм'
  },
  {
    src: viber,
    to: 'https://www.viber.com/',
    alt: 'вайбер'
  },
  {
    src: whatsapp,
    to: 'https://www.whatsapp.com/',
    alt: 'ватсапп'
  },
]

export type SocialNetworkItemType = typeof items[0]

type Props = {
  className?: string
}

export const SocialNetworks: React.FC<Props> = ({ className }) => {
  let Items = items.map((i, index) => <Item {...i} key={index} />)

  return <div className={cn('flex gap-x-5', className)}>
    {Items}
  </div>
};