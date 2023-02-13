import { useEffect, useState } from 'react';

export const useResize = (callback?: (newWidth: number) => void) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const eventCallback = () => {
      setSize(window.innerWidth);
      callback && callback(window.innerWidth);
    };

    window.addEventListener('resize', eventCallback);
    return () => window.addEventListener('resize', eventCallback);
  }, []);

  return size;
};