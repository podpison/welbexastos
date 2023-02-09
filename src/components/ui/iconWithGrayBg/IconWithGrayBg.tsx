import './styles.scss';
import cn from 'classnames';

type Props = {
  spriteClassName?: string
  className?: string
  icon?: string
  containerSize?: number
  iconSize?: number
}

export const IconWithGrayBg: React.FC<Props> = ({ spriteClassName, className, icon, containerSize = 70, iconSize = 40 }) => {
  let containerStyles = containerSize ? { width: `${containerSize}px`, height: `${containerSize}px` } : undefined;
  let iconStyles = iconSize ? { width: `${iconSize}px`, height: `${iconSize}px` } : undefined;

  return <div
    className={cn("icon-with-gray-bg__icon-container transition-all flex rounded-2xl", className)}
    style={containerStyles}
  >
    {icon
      ? <img className={cn("transition-all m-auto", spriteClassName)} style={iconStyles} src={icon} alt='icon' />
      : <div className={cn("transition-all m-auto", spriteClassName)} style={iconStyles} />
    }
  </div>
};