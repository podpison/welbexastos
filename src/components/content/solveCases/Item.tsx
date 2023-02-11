import { Video } from "../../ui/Video";
import { SolveCasesItemType } from "./SolveCases";
import cn from 'classnames';
import { PlayIcon } from "./PlayIcon";
import './styles.scss';

type Props = {

} & SolveCasesItemType

export const Item: React.FC<Props> = ({ description, heading, id, video }) => {
  let isItemInCenter = id === 1 || id === 2;

  const handleClick = () => {

  };

  return <div
    className='
    solve-cases__item
    group relative flex flex-col py-5 px-3 transition-all
    md:first:row-[1/3] md:first:col-[1]
    md:last:row-[1/3] md:last:col-[3]
    '
  >
    <div>
      <h6 className="orange-to-red-text text-[36px]">{heading.heading}</h6>
      <p className="mt-2.5 max-w-[10em]">{heading.description}</p>
    </div>
    <p className={cn("mt20-50 mb-2.5 max-w-[13em] md:mb-5", isItemInCenter ? 'md:mb-0' : 'lg:mb-7')}>{description}</p>
    <div className={cn("mt-auto flex flex-col md:flex-row-reverse md:gap-x-5")}>
      <div className='flex flex-col gap-y-2.5'>
        <PlayIcon isItemInCenter={isItemInCenter} />
        <p className={cn("max-md:text-dark-gray md:flex md:flex-col", isItemInCenter && 'md:hidden')}>
          <span className="max-md:hidden">Смотреть </span>
          Видеоотзыв
        </p>
      </div>
      <Video className={cn("mt10-20 h-24 md:mt-0", isItemInCenter && 'md:hidden')} videoId={video} />
    </div>
  </div>
};