import cn from 'classnames';
import { WidgetsItemType } from '../../../../../redux/reducers/static';

type Props = {
  isActive: boolean
  item: WidgetsItemType
  onClick: React.Dispatch<React.SetStateAction<WidgetsItemType>>
  closeSelect: () => void
}

export const Item: React.FC<Props> = ({ item, isActive, onClick, closeSelect }) => {
  const handleClick = () => {
    closeSelect();
    onClick(item);
  }

  return <div
    className="cursor-pointer flex items-center py-4 px-5 sm:py-5 sm:px-6 lg:py-5 lg:px-7"
    style={{ background: 'linear-gradient(152.66deg, rgba(26, 29, 35, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }}
    onClick={handleClick}
  >
    <img className={cn("w-5 h-5 transition-all", !isActive && 'opacity-60')} src={item.img} />
    <p className={cn("text16-18 transition-all ml-2.5 md:ml-5", !isActive && 'text-dark-gray opacity-60')}>{item.name}</p>
  </div>
};