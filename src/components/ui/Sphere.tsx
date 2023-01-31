import sphere from '../../assets/imgs/sphere.webp';
//author https://www.figma.com/community/file/985826182553055857/L.Star--free-3D-geometric-objects(Community)?fuid=1164536833188332707
//licence https://creativecommons.org/licenses/by/4.0/deed.ru
import cn from 'classnames';
import dots from '../../assets/imgs/content/hero/dots.webp';
import { Ball } from './ball/Ball';

type Props = {
  className?: string
}

export const Sphere: React.FC<Props> = ({ className }) => {
  return <div className={cn(`absolute -z-30 max-w-[250px] h-fit`, className)}>
    <Ball className="w-10 h-10 -top-[75%] -right-1/4 sm:w-12 sm:h-12 md:w-26 sm:-top-[30%] sm:-right-[5%] md:h-26 md:-top-[60px] lg:w-20 lg:h-20" color="purple" />
    <Ball className="w-4 h-4 bottom-[10%] -right-[5%] sm:w-6 sm:h-6 md:w-8 md:h-8 md:right-0 md:-bottom-10" color="red" />
    <Ball className="w-6 h-6 -bottom-1/4 -left-[10%] sm:w-9 sm:h-9 sm:z-10 md:w-12 md:h-12 md:-bottom-[150px] md:left-0" color="yellow" />
    <img className={cn('', '')} src={sphere} alt='сфера' />
    {/* <img className='absolute -z-20' src={dots} alt='точки' /> */}
  </div>
};