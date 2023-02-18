import { Light } from '../Light';
import { SocialNetworks } from '../socialNetworks/SocialNetworks';
import logo from './../../../assets/imgs/ui/footer/logo.svg';
import { Phone } from './../Phone';
import { Block } from './Block';

const blocks = [
  {
    heading: 'О компании',
    items: [
      {
        name: 'Партнёрская программа',
        to: 'https://www.google.com/partners',
        isAnotherWebsite: true,
      },
      {
        name: 'Вакансии',
        to: 'https://careers.google.com/',
        isAnotherWebsite: true,
      },
    ],
  },
  {
    heading: 'Меню',
    itemsClassName: 'grid-cols-2 gap-x-5',
    items: [
      {
        name: 'Расчёт стоимости',
        to: 'costCalculation',
      },
      {
        name: 'Благодарность клиентов',
        to: 'letters',
      },
      {
        name: 'Услуги',
        to: 'services',
      },
      {
        name: 'Виджеты',
        to: 'widgets',
      },
      {
        name: 'Интеграции',
        to: 'integration',
      },
      {
        name: 'Наши клиенты',
        to: 'ourClients',
      },
      {
        name: 'Кейсы',
        to: 'cases',
      },
      {
        name: 'Вопрос / Ответ',
        to: 'QAndA',
      },
    ],
  },
  {
    heading: 'Контакты',
    className: 'flex flex-col sm:col-[1/3] lg:col-auto lg:items-end',
    itemsClassName: 'lg:justify-items-end',
    items: [
      <Phone />,
      <SocialNetworks />,
      <a className='block w-fit transition-colors hover:text-blue' href='https://goo.gl/maps/8PvB8qpWHpe1JkTP6' target='_blank' rel='noopener noreferrer'>Москва, Путевой проезд 3с1, к 902</a>
    ],
  },
];

export type FooterAnotherPageItemType = {
  name: string
  to: string
  isAnotherWebsite: boolean
}

export type FooterHashLinkItemType = {
  name: string
  to: string
}

export type FooterBlockType = {
  heading: string
  className?: string
  itemsClassName?: string
  items: FooterAnotherPageItemType[] | FooterHashLinkItemType[] | JSX.Element[]
}

export const Footer: React.FC = () => {
  let Blocks = blocks.map((b, index) => <Block {...b} key={index} />);

  let currentYear = new Date().getFullYear();

  return <footer className='mt80-160 relative pb-14 lg:pb-5'>
    <Light className='bg-dark-red bottom-[15%] left-[15%]' size={230} />
    <Light className='bg-orange bottom-0 right-0' size={180} />
    <img src={logo} alt='Логотип' />
    <div className='grid grid-cols-1 gap-y-7 mt-7 sm:mt-9 sm:grid-cols-[repeat(2,_max-content)] sm:justify-between sm:gap-x-[7%] lg:grid-cols-[repeat(3,_max-content)]'>
      {Blocks}
    </div>
    <div className='flex flex-col max-sm:mt-12 sm:-mt-10 sm:items-end md:-mt-11 lg:mt-8'>
      <p>©WelbeX {currentYear}. Все права защищены.</p>
      <a className='underline transition-colors hover:text-blue' href='https://welbex.ru/politica.html' target='_blank' rel='noopener noreferrer'> Политика конфиденциальности</a>
    </div>
  </footer>
};