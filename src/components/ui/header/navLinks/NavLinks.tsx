import { HashLink } from "../../HashLink";
import './item.scss';

const navLinks = [
  {
    name: 'Услуги',
    to: 'services'
  },
  {
    name: 'Виджеты',
    to: 'widgets'
  },
  {
    name: 'Интеграции',
    to: 'integration'
  },
  {
    name: 'Кейсы',
    to: 'cases'
  },
  {
    name: 'Письма',
    to: 'letters'
  },
]

export type HeaderNavLinkType = typeof navLinks[0]

export const NavLinks: React.FC = () => {
  let NavLinks = navLinks.map((nl, index) => <HashLink className="header__nav-link" {...nl} key={index} />);

  return <div className="flex gap-x-4 max-sm:justify-center max-sm:row-[2] max-sm:col-[1/3] sm:ml-7 sm:gap-x-6 md:ml-10 lg:gap-x-8 lg:ml-14">
    {NavLinks}
  </div>
};