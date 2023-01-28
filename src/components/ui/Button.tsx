import cn from 'classnames';

type Props = {
  children: React.ReactNode
  className?: string
  isBlue?: boolean
}

export const Button: React.FC<Props> = ({ children, className, isBlue = true }) => {
  return <button
    className={cn(
      "text12-16 w-fit py-5 px-4",
      className,
      isBlue && 'bg-blue'
    )}
  >
    {children}
  </button>
};