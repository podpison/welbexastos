import { List } from '../../../ui/list/List';
import { useState } from 'react';
import cn from 'classnames';
import { Glass } from './../../../ui/glass/Glass';
import './styles.scss';
import { Items } from './items/Items';
import { ChevronDown } from '../../../ui/ChevronDown';
import { WidgetsItemType } from '../../../../redux/reducers/static';

type Props = {
  items: WidgetsItemType[]
  currentItem: WidgetsItemType
  setCurrentItem: React.Dispatch<React.SetStateAction<WidgetsItemType>>
}

export const Select: React.FC<Props> = ({ currentItem, items, setCurrentItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => window.innerWidth < 640 && setIsOpen(prev => !prev);

  return <>
    <div
      className="widgets__select group max-sm:cursor-pointer sm:col-[2] sm:row-[1/3]"
      onClick={handleItemClick}
    >
      <div className='flex items-center py-4 px-5 sm:hidden'>
        <img className="w-5 h-5" src={currentItem?.img} />
        <p className="text16-18 ml-2.5 md:ml-5">{currentItem?.name}</p>
        <ChevronDown className="ml-auto sm:hidden" isOpen={isOpen} />
      </div>
      <Items
        className='max-h-[448px] max-sm:hidden md:max-h-[469px]'
        currentItem={currentItem}
        items={items}
        onClick={handleItemClick}
        setCurrentItem={setCurrentItem}
      />
    </div>
    <div className='relative pt-5 pb-7 border-l border-r border-gray sm:col-[1] sm:row-[1] sm:border-none sm:p-0 sm:mt-[5%] sm:ml-[10%] max-md:px-4'>
      <Glass className='w-full h-full left-0 top-0 sm:hidden' style={{ background: 'linear-gradient(152.66deg, rgba(26, 29, 35, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }} />
      <div className='relative'>
        <h6>Основные возможности:</h6>
        <List className='flex flex-col gap-y-2.5 mt-4 lg:grid lg:grid-cols-2 md:mt-5 md:gap-y-4 md:gap-x-8' items={currentItem?.possibilities} />
      </div>
      <Items
        className={cn('absolute top-0 -left-[1px] w-[calc(100%_+_2px)] max-h-[392px] sm:hidden', isOpen ? '' : 'hidden')}
        currentItem={currentItem}
        items={items}
        onClick={handleItemClick}
        setCurrentItem={setCurrentItem}
      />
    </div>
  </>
};