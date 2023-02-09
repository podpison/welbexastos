import './styles.scss';
import cn from 'classnames';

type Props = {
  spriteClassName?: string
  className?: string
  icon?: string
  containerSize?: string
  iconSize?: string
  rounded?: string
}

export const IconWithGrayBg: React.FC<Props> = ({ spriteClassName, className, icon, containerSize = 'w-[70px] h-[70px]', iconSize = 'w-10 h-10', rounded }) => {

  return <div
    className={cn("icon-with-gray-bg__icon-container transition-all flex", className, containerSize, rounded ? rounded : 'rounded-2xl')}
  >
    {icon
      ? <img className={cn("transition-all m-auto", spriteClassName, iconSize)} src={icon} alt='icon' />
      : <div className={cn("transition-all m-auto", spriteClassName, iconSize)} />
    }
  </div>
};