import cn from 'classnames';

type Props = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  isBlue?: boolean
  paddings?: boolean
  type?: "button" | "submit" | "reset"
}

export const Button: React.FC<Props> = ({ children, onClick, className, isBlue = true, paddings = true, type = 'submit' }) => {
  return <button
    className={cn(
      "transition-all shadow-none",
      className,
      isBlue && 'bg-blue hover:shadow-blue-shadow',
      paddings && 'py-5 px-4'
    )}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
};