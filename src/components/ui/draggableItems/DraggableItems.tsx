import { motion } from 'framer-motion';
import { useRef } from 'react';
import cn from 'classnames';
import './styles.scss';
import { useResize } from '../../../hooks/useResize';

type Props = {
  children: React.ReactNode
  minItemWidth: number
  className?: string
  defaultStyles?: boolean
  itemsCount?: number
}

export const DraggableItems: React.FC<Props> = ({ children, minItemWidth, className, defaultStyles = true, itemsCount = 4 }) => {
  const innerWidth = useResize();
  const containerRef = useRef<HTMLDivElement>(null);

  let minContainerWidth = itemsCount * minItemWidth + 24 * (itemsCount - 1) + 14;
  let isDraggable = innerWidth < minContainerWidth + 14;

  return <motion.div ref={containerRef}>
    <motion.div
      className={cn('', className, isDraggable ? 'cursor-pointer' : 'draggable-items', defaultStyles && 'mt30-50 grid grid-cols-4 gap-6')}
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