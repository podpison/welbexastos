import cn from 'classnames';

type Props = {
  isOpen: boolean
  className: string
}

export const ChevronDown: React.FC<Props> = ({ className, isOpen }) => {

  //chevron down icon by svgrepo.com
  return <svg
    className={cn("transition-all duration-300 group-hover:fill-dark-gray", className, isOpen && 'rotate-180 fill-dark-gray')}
    fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.44 407.44" xmlSpace="preserve" stroke="#ffffff" strokeWidth="20.371850000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon> </g>
  </svg>
};