import { Link } from 'react-router-dom';
import logo from './../../../assets/imgs/logo.svg';

export const Logo: React.FC = () => {
  return <Link className='w-[140px]' to='/'>
    <img className='w-full' src={logo} alt='Логотип' />
    <small className='text-[10px] font-light leading-3 hidden mt-2.5 md:block'>крупный интегратор AmoCRM в Росиии и ещё 8 странах</small>
  </Link>
};