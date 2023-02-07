import { ServicesItemType } from "./Services";
import { IconWithGrayBg } from './../../ui/iconWithGrayBg/IconWithGrayBg';
import cn from 'classnames';
import { Button } from "../../ui/Button";

type Props = {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<number | null>>
} & ServicesItemType

export const Item: React.FC<Props> = ({ spriteClassName, description, heading, id, isActive, setIsActive }) => {

  const handleClick = () => {
    isActive ? setIsActive(null) : setIsActive(id);
  };

  return <div className="blur-bg group flex flex-col cursor-pointer p-4 md:p-5" onClick={handleClick}>
    <div className='grid grid-cols-[max-content_1fr] items-center gap-x-4 sm:grid-cols-1 sm:gap-y-5'>
      <IconWithGrayBg className='sm:group-hover:h-[0px] sm:group-hover:[&>div]:h-[0px]' spriteClassName={spriteClassName} />
      <h6 className='text16-18 text-white font-medium max-sm:pr-6 sm:group-hover:-mt-5 sm:h-[3em]'>{heading}</h6>
      {/* chevron down icon by svgrepo.com */}
      <svg
        className={cn("absolute right-4 top-5 transition-all duration-300 group-hover:fill-dark-gray sm:hidden", isActive && 'rotate-180 fill-dark-gray')}
        fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.44 407.44" xmlSpace="preserve" stroke="#ffffff" strokeWidth="20.371850000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon> </g>
      </svg>
    </div>
    <div className={cn('mt10-20 flex flex-col h-full transition-all duration-300 sm:gap-y-5', isActive ? 'max-sm:mt10-20 max-sm:h-full' : 'max-sm:h-[0px] max-sm:opacity-0 max-sm:mt-0')}>
      <p className="h-full">{description}</p>
      <Button
        className='
        w-[calc(100%_+_32px)] -ml-4
        max-sm:mt-5
        sm:opacity-0 sm:h-[0px] sm:p-0 sm:mt-auto
        sm:group-hover:opacity-100 sm:group-hover:h-fit sm:group-hover:py-5 sm:group-hover:px-4
        md:w-[calc(100%_+_40px)] md:-ml-5
        '
      >
        Заказать
      </Button>
    </div>
  </div>
};