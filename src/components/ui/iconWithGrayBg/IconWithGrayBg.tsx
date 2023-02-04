import './styles.scss';
import cn from 'classnames';

type Props = {
  spriteClassName: string
  className?: string
}

export const IconWithGrayBg: React.FC<Props> = ({ spriteClassName, className }) => {
  return <div className={cn("icon-with-gray-bg__icon-container transition-all flex w-[70px] h-[70px] rounded-2xl", className)}>
    <div className={cn("h-10 w-10 transition-all m-auto", spriteClassName)} />
  </div>
};