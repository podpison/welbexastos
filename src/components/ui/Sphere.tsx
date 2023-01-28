import sphere from '../../assets/imgs/sphere.webp';
//author https://www.figma.com/community/file/985826182553055857/L.Star--free-3D-geometric-objects(Community)?fuid=1164536833188332707
//licence https://creativecommons.org/licenses/by/4.0/deed.ru
import cn from 'classnames';
import dots from '../../assets/imgs/content/hero/dots.webp';
import { Ball } from './ball/Ball';

type Props = {
  containerClassName?: string
  className?: string
}

export const Sphere: React.FC<Props> = ({ containerClassName, className }) => {
  return <div className={cn('relative', containerClassName)}>
    <Ball className="w-10 h-10 -mt-[8%] -right-[30px] sm:-mt-[180px] sm:w-12 sm:h-12 md:-mt-[40px] md:w-26 md:h-26 lg:w-20 lg:h-20" color="purple" />
    <Ball className="w-4 h-4 mt-[325px] right-2 sm:mt-[130px] sm:w-6 sm:h-6 md:m-0 md:bottom-[10%] md:right-[10%] md:w-8 md:h-8" color="red" />
    <Ball className="w-6 h-6 mt-[400px] max-sm:left-0 sm:right-1/4 sm:mt-[143px] sm:w-9 sm:h-9 sm:z-10 md:m-0 md:-left-[1%] md:-bottom-[20%] md:w-12 md:h-12" color="yellow" />
    <img className={cn('', className)} src={sphere} alt='сфера' />
    {/* <img className='absolute -z-20' src={dots} alt='точки' /> */}
  </div>
};