import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [prevPos, setPrevPos] = useState(0)
  const [show, setShow] = useState(false)
  
  let scrollHeigth = document.documentElement.scrollHeight
  let clientHeight = document.documentElement.clientHeight

  useEffect(() => {
    const callback = (e: any) => {
      let currentPos = window.scrollY
      setPrevPos(currentPos);
      setShow(prevPos <= currentPos)
    }
    window.addEventListener('scroll', callback)
    return () => window.removeEventListener('scroll', callback)
  }, [prevPos])

  let direction: 'top' | 'down' = (!show || scrollHeigth - window.scrollY - clientHeight <= 1) ? 'top' : 'down'

  return direction
}