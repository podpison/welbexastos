import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { Logo } from './Logo';
import { NavLinks } from './navLinks/NavLinks';
import { Phone } from './Phone';
import { SocialNetworks } from './socialNetworks/SocialNetworks';
import cn from 'classnames';

export const Header: React.FC = () => {
  let scrollDirection = useScrollDirection();
  let shouldHide = scrollDirection === 'down' && window.innerWidth < 640;

  return <header className={cn('fixed z-50 top-0 w-[calc(100%_-_28px)] max-w-[1120px] grid grid-cols-2 gap-y-5 items-center py-5 transition-all sm:grid-cols-[max-content_max-content_1fr] md:sm:grid-cols-[max-content_max-content_1fr_max-content]', shouldHide && '-top-12')}>
    <div className='absolute -z-10 -left-full h-full w-[200vw] bg-black' />
    <Logo />
    <NavLinks />
    <Phone />
    <SocialNetworks />
  </header>
};