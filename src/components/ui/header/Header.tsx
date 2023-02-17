import { useScrollDirection } from '../../../hooks/useScrollDirection';
import { Logo } from './Logo';
import { NavLinks } from './navLinks/NavLinks';
import { Phone } from '../Phone';
import { SocialNetworks } from '../socialNetworks/SocialNetworks';
import cn from 'classnames';
import { DisabledInternetWarning } from './DisabledInternetWarning';

export const Header: React.FC = () => {
  let scrollDirection = useScrollDirection();
  let shouldHide = scrollDirection === 'down' && window.innerWidth < 640;

  return <header className={cn('fixed z-50 top-0 w-[calc(100%_-_28px)] max-w-[1140px] grid grid-cols-2 gap-y-5 items-center py-5 transition-all sm:grid-cols-[max-content_max-content_1fr] md:sm:grid-cols-[max-content_max-content_1fr_max-content]', shouldHide && '-top-12')}>
    <div className='absolute -z-10 -left-full h-full w-[200vw] bg-black' />
    <DisabledInternetWarning />
    <Logo />
    <NavLinks />
    <Phone className='text12-16 hidden ml-auto md:block' />
    <SocialNetworks className='ml-auto md:ml-6 lg:ml-12' />
  </header>
};