import { useEffect, useState } from 'react'
import cn from 'classnames'

export const ArrowUp = () => {
  const [prevPos, setPrevPos] = useState(0);
  const [show, setShow] = useState(false);

  let scrollHeigth = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;

  useEffect(() => {
    const callback = () => {
      let currentPos = window.scrollY;
      setPrevPos(currentPos);
      setShow(prevPos >= currentPos)
    };
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, [prevPos]);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  let hidden = !show || scrollHeigth - window.scrollY - clientHeight <= 1 || window.scrollY === 0;

  return <div onClick={clickHandler} className={cn('flex fixed bottom-[8%] right-[4%] w-10 h-10 rounded-full transition-opacity bg-light-text cursor-pointer', hidden ? 'opacity-0 pointer-events-none -z-50' : 'opacity-100 z-50')}>
    <svg
      className='m-auto'
      fill="#0E1014" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960.406 0 345 615.176l81.364 81.366L902.83 220.075V1920h114.922V220.075l476.466 476.467 81.366-81.366z" fillRule="evenodd"></path> </g></svg>
  </div>
};