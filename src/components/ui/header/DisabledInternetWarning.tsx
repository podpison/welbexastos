import { useEffect, useState } from "react";
import cn from 'classnames';
import { motion } from 'framer-motion';

export const DisabledInternetWarning: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const callback = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);

    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }, [isOnline]);

  return <motion.div
    className={cn("absolute left-[40%] z-50 bg-red px-2 py-3")}
    animate={{
      y: isOnline ? -100 : 0
    }}
  >
    <p className='text18'>Соединение с интернетом отсутствует...</p>
  </motion.div>
};