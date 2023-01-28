import cn from 'classnames';
import { Item } from './Item';

type Props = {
  items: string[]
  className?: string
}

export const List: React.FC<Props> = ({ items, className }) => {
  let Items = items.map((i, index) => <Item name={i} key={index} />);

  return <ul className={cn('', className)}>
    {Items}
  </ul>
};