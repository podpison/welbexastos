import { useInsertionEffect, useState } from "react";
import cn from 'classnames';
import { motion } from 'framer-motion';

export const DisabledInternetWarning: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useInsertionEffect(() => {
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
    className='fixed bottom-0 flex w-[calc(100%_-_28px)] justify-center'
    animate={{
      y: isOnline ? 200 : 0
    }}
    initial={false}
  >
    <div
      className={cn("w-fit h-fit bg-red px-2 py-3 z-50")}
    >
      <p className='text18'>Соединение с интернетом отсутствует...</p>
    </div>
  </motion.div>
};