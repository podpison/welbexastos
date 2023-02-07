import { List } from '../../../ui/list/List';
import { useState } from 'react';
import cn from 'classnames';
import { Item } from './Item';
import { WindgetType } from '../Widgets';
import { Glass } from './../../../ui/glass/Glass';

type Props = {
  items: WindgetType[]
  currentItem: WindgetType
  setCurrentItem: React.Dispatch<React.SetStateAction<WindgetType>>
}

export const Select: React.FC<Props> = ({ currentItem, items, setCurrentItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => setIsOpen(prev => !prev);

  let SelectItems = items.map(i => <Item isActive={currentItem.id === i.id} closeSelect={handleItemClick} onClick={setCurrentItem} item={i} key={i.id} />);

  return <div className="mt20-50">
    <div
      className="group cursor-pointer flex items-center py-4 px-5 sm:py-5 sm:px-6 lg:py-5 lg:px-7"
      style={{ background: 'linear-gradient(95.49deg, rgba(255, 246, 233, 0.1) 8.22%, rgba(26, 29, 35, 0.1) 75.4%)' }}
      onClick={handleItemClick}
    >
      <img className="w-5 h-5" src={currentItem.img} />
      <p className="text16-18 ml-2.5 md:ml-5">{currentItem.name}</p>
      {/* chevron down icon by svgrepo.com */}
      <svg
        className={cn("transition-all duration-300 ml-auto group-hover:fill-dark-gray sm:hidden", isOpen && 'rotate-180 fill-dark-gray')}
        fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.44 407.44" xmlSpace="preserve" stroke="#ffffff" strokeWidth="20.371850000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon> </g>
      </svg>
    </div>
    <div className='relative pt-5 pb-7 border-l border-r border-[#38353b] max-md:px-4'>
      <Glass className='w-full h-full left-0 top-0' style={{ background: 'linear-gradient(152.66deg, rgba(26, 29, 35, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }} />
      <div className='relative'>
        <h6>Основные возможности:</h6>
        <List className='flex flex-col gap-y-2.5 mt-4 md:mt-5 md:gap-y-4' items={currentItem.possibilities} />
      </div>
      <div className={cn('absolute top-0 -left-[1px] w-[calc(100%_+_2px)] max-h-[392px] overflow-y-auto z-10 bg-black', isOpen ? '' : 'hidden')}>
        {SelectItems}
      </div>
    </div>
  </div>
};