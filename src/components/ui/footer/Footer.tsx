import { SocialNetworks } from '../socialNetworks/SocialNetworks';
import logo from './../../../assets/imgs/content/footer/logo.svg';
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
    items: [
      {
        name: 'Расчёт стоимости',
        to: 'costCalculation',
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
        name: 'Благодарность клиентов',
        to: 'letters',
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
    items: [
      <Phone />,
      <SocialNetworks />
    ],
  },
];

export type FooterAnotherPageItemType = {
  name: string;
  to: string;
  isAnotherWebsite: boolean;
}

export type FooterHashLinkItemType = {
  name: string;
  to: string;
}

export type FooterBlockType = {
  heading: string;
  items: FooterAnotherPageItemType[] | FooterHashLinkItemType[] | JSX.Element[]
}

export const Footer: React.FC = () => {
  let Blocks = blocks.map((b, index) => <Block {...b} key={index} />);

  return <footer>
    <img src={logo} alt='Логотип' />
    <div className='flex flex-col gap-y-7 mt-7 sm:mt-9'>
      {Blocks}
    </div>
  </footer>
};