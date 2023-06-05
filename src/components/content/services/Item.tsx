import { IconWithGrayBg } from './../../ui/iconWithGrayBg/IconWithGrayBg';
import cn from 'classnames';
import { Button } from "../../ui/Button";
import { useLayoutEffect, useRef } from "react";
import { ChevronDown } from "../../ui/ChevronDown";
import { ServicesItemType } from '../../../redux/reducers/static';

type Props = {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<string | null>>
  maxItemHeight: number
  setMaxItemHeight: React.Dispatch<React.SetStateAction<number>>
} & ServicesItemType

export const Item: React.FC<Props> = ({ spriteClassName, description, heading, id, isActive, setIsActive, maxItemHeight, setMaxItemHeight }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    isActive ? setIsActive(null) : setIsActive(heading);
  };

  useLayoutEffect(() => {
    if (window.innerWidth > 640) {
      maxItemHeight === 0 && setMaxItemHeight(itemRef.current?.clientHeight || 0);
    }

    const callback = () => {
      if (!itemRef.current) return;

      if (window.innerWidth < 640) {
        setMaxItemHeight(0);
      } else if (maxItemHeight < itemRef.current?.clientHeight) {
        setMaxItemHeight(itemRef.current?.clientHeight);
      } else if (maxItemHeight !== 0 && itemRef.current?.clientHeight > maxItemHeight) {
        setMaxItemHeight(0);
      };
    };

    window.addEventListener('resize', callback);
    return () => window.addEventListener('resize', callback);
  }, [itemRef.current]);

  return <div
    className="blur-bg group flex flex-col cursor-pointer p-4 md:p-5"
    style={{ height: maxItemHeight === 0 ? 'auto' : maxItemHeight }}
    onClick={handleClick}
    ref={itemRef}
  >
    <div className='grid grid-cols-[max-content_1fr] items-center gap-x-4 sm:grid-cols-1 sm:gap-y-5'>
      <IconWithGrayBg className='sm:group-hover:h-[0px] sm:group-hover:[&>div]:h-[0px]' spriteClassName={spriteClassName} />
      <h6 className='text16-18 text-white font-medium max-sm:pr-6 sm:group-hover:-mt-5 sm:h-[3em]'>{heading}</h6>
      <ChevronDown className="absolute right-4 top-5 sm:hidden" isOpen={isActive} />
    </div>
    <div className={cn('mt10-20 flex flex-col h-full transition-all duration-300 sm:gap-y-5', isActive ? 'max-sm:mt10-20 max-sm:h-full' : 'max-sm:invisible max-sm:h-[0px] max-sm:opacity-0 max-sm:mt-0')}>
      <p className="h-full">{description}</p>
      <Button
        className={cn(
        'w-[calc(100%_+_32px)] -ml-4\
        max-sm:mt-5\
        sm:opacity-0 sm:h-[0px] sm:p-0 sm:mt-auto\
        sm:group-hover:opacity-100 sm:group-hover:h-fit sm:group-hover:py-5 sm:group-hover:px-4\
        md:w-[calc(100%_+_40px)] md:-ml-5',
        )}
      >
        Заказать
      </Button>
    </div>
  </div>
};