import cn from 'classnames';

type Props = {
  className: string
  size: number
  opacity?: number
}

export const Light: React.FC<Props> = ({ className, size, opacity = 50 }) => {
  return <div
    className={cn('absolute -z-10 blur-[196px]', className)}
    style={{
      height: `${size}px`,
      width: `${size}px`,
      opacity,
    }}
  >

  </div>
};