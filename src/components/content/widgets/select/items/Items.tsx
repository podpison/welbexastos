import { WindgetType } from "../../Widgets";
import { Item } from "./Item";
import cn from 'classnames';

type Props = {
  items: WindgetType[]
  currentItem: WindgetType
  className?: string
  onClick: () => void
  setCurrentItem: React.Dispatch<React.SetStateAction<WindgetType>>
}

export const Items: React.FC<Props> = ({ currentItem, items, className, onClick, setCurrentItem }) => {
  let SelectItems = items.map(i => <Item isActive={currentItem.id === i.id} closeSelect={onClick} onClick={setCurrentItem} item={i} key={i.id} />);

  return <div className={cn('overflow-y-auto z-10 bg-black', className)}>
    {SelectItems}
  </div>
};