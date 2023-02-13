import cn from 'classnames';

type Props = {
  className?: string
}

export const Phone: React.FC<Props> = ({ className }) => {
  return <a
    className={cn("text12-16 h-fit transition-colors hover:text-blue", className)}
    href='tel:+7 495 471-41-63'
  >
    +7 495 471-41-63
  </a>
};