import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import './styles.scss';

type Props = {
  children: React.ReactNode
  minItemWidth: number
  className?: string
}

export const DraggableItems: React.FC<Props> = ({ children, minItemWidth, className }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const containerRef = useRef<HTMLDivElement>(null);

  let minContainerWidth = 4 * minItemWidth + 24 * 3 + 14;
  let isDraggable = innerWidth < minContainerWidth + 14;

  useEffect(() => {
    const callback = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', callback);
    return () => window.addEventListener('resize', callback);
  }, []);

  return <motion.div ref={containerRef}>
    <motion.div
      className={cn('mt30-50 grid grid-cols-4 gap-6', className, isDraggable ? 'cursor-pointer' : 'draggable-items')}
      style={{
        minWidth: minContainerWidth,
        paddingRight: isDraggable ? '14px' : 0
      }}
      drag={isDraggable ? 'x' : undefined}
      dragConstraints={isDraggable
        ? {
          left: innerWidth - minContainerWidth - 15,
          right: 0,
        }
        : undefined}
    >
      {children}
    </motion.div>
  </motion.div>
};