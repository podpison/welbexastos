import founder from '../../../assets/imgs/content/acquaintance/founder.webp';
import { Ball } from '../../ui/ball/Ball';
import { Video } from './Video';
import { Light } from './../../ui/Light';

export const Acquaintance: React.FC = () => {
  return <section className="mt-60">
    <h2>Давайте знакомиться</h2>
    <div className='relative grid grid-cols-[40%_1fr] mt-10 max-sm:mt-5 sm:gap-5 sm:mt-12 sm:grid-rows-[max-content_1fr] sm:grid-cols-[60%_1fr] md:mt-14 lg:mt-[70px]'>
      <p className="text24 max-w-[14em] max-sm:col-[1/3]">
        <span className="orange-to-red-text">Посмотрите минутное видео </span>
        от основателя компании</p>
      <div className='relative sm:col-[2] sm:row-[1/3]'>
        <Light className='bg-purple bottom-[20%] max-sm:-left-1/2 sm:-right-[30%]' size={150} />
        <Ball className='w-5 h-5 top-1/4 max-sm:left-[5%] sm:right-[10%] sm:top-[40%]' color='purple' />
        <img className='h-full sm:ml-auto' src={founder} alt='основатель' />
        <p className='text14-18 absolute top-5 w-full whitespace-nowrap max-sm:left-full sm:top-0 sm:-left-[60px] lg:left-auto lg:top-[30px]'>Михаил Доброхвалов<br />— основатель WelbeX</p>
      </div>
      <Video />
    </div>
  </section>
};