import cn from 'classnames';

type Props = {
  className: string
}

export const GradientStrip: React.FC<Props> = ({ className }) => {
  return <div
    className={cn('absolute -z-40 w-px h-[calc(100%_-_20px)] opacity-10', className)}
    style={{ background: 'linear-gradient(270deg, #FCB045 12.92%, #833AB4 46.59%)' }}
  >

  </div>
};