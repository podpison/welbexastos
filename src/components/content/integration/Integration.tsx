import { Category } from './category/Category';

//соц сети
import facebook from '../../../assets/imgs/content/integration/facebook.png';
import facebookGray from '../../../assets/imgs/content/integration/facebook-gray.png';
import vk from '../../../assets/imgs/content/integration/vk.png';
import vkGray from '../../../assets/imgs/content/integration/vk-gray.png';
import telegram from '../../../assets/imgs/content/integration/telegram.png';
import telegramGray from '../../../assets/imgs/content/integration/telegram-gray.png';
import instagram from '../../../assets/imgs/content/integration/instagram.png';
import instagramGray from '../../../assets/imgs/content/integration/instagram-gray.png';

//E-mail маркетинг
import mailchimp from '../../../assets/imgs/content/integration/mailchimp.png';
import mailchimpGray from '../../../assets/imgs/content/integration/mailchimp-gray.png';
import sendpulse from '../../../assets/imgs/content/integration/sendpulse.png';
import sendpulseGray from '../../../assets/imgs/content/integration/sendpulse-gray.png';
import unisender from '../../../assets/imgs/content/integration/unisender.png';
import unisenderGray from '../../../assets/imgs/content/integration/unisender-gray.png';

//Мессенджеры
import salebot from '../../../assets/imgs/content/integration/salebot.png';
import salebotGray from '../../../assets/imgs/content/integration/salebot-gray.png';
import wazzup from '../../../assets/imgs/content/integration/wazzup.png';
import wazzupGray from '../../../assets/imgs/content/integration/wazzup-gray.png';
import pact from '../../../assets/imgs/content/integration/pact.png';
import pactGray from '../../../assets/imgs/content/integration/pact-gray.png';

//голосовые прозвоны
import zvonPes from '../../../assets/imgs/content/integration/zvonPes.png';
import zvonPesGray from '../../../assets/imgs/content/integration/zvonPes-gray.png';

//Складсвие сервисы
import mySklad from '../../../assets/imgs/content/integration/moiSklad.png';
import mySkladGray from '../../../assets/imgs/content/integration/moiSklad-gray.png';

//Бизнес аналитика
import powerBI from '../../../assets/imgs/content/integration/powerBI.png';
import powerBIGray from '../../../assets/imgs/content/integration/powerBI-gray.png';

//Онлайн-банкинг
import tinkoff from '../../../assets/imgs/content/integration/tinkoff.png';
import tinkoffGray from '../../../assets/imgs/content/integration/tinkoff-gray.png';
import ukassa from '../../../assets/imgs/content/integration/ukassa.png';
import ukassaGray from '../../../assets/imgs/content/integration/ukassa-gray.png';

//sms рассылки
import smsCenter from '../../../assets/imgs/content/integration/smsCenter.png';
import smsCenterGray from '../../../assets/imgs/content/integration/smsCenter-gray.png';
import smsRu from '../../../assets/imgs/content/integration/smsRu.png';
import smsRuGray from '../../../assets/imgs/content/integration/smsRu-gray.png';

//сервисы
import yandex from '../../../assets/imgs/content/integration/yandex.png';
import yandexGray from '../../../assets/imgs/content/integration/yandex-gray.png';
import google from '../../../assets/imgs/content/integration/google.png';
import googleGray from '../../../assets/imgs/content/integration/google-gray.png';

//Телефония
import pbx from '../../../assets/imgs/content/integration/pbx.png';
import pbxGray from '../../../assets/imgs/content/integration/pbx-gray.png';
import sipuni from '../../../assets/imgs/content/integration/sipuni.png';
import sipuniGray from '../../../assets/imgs/content/integration/sipuni-gray.png';
import mangoOffice from '../../../assets/imgs/content/integration/mangoOffice.png';
import mangoOfficeGray from '../../../assets/imgs/content/integration/mangoOffice-gray.png';

//Бухгалтерия
import c1 from '../../../assets/imgs/content/integration/1c.png';
import c1Gray from '../../../assets/imgs/content/integration/1c-gray.png';
import { Light } from '../../ui/Light';
import { Ball } from '../../ui/ball/Ball';

const categories = [
  {
    category: 'социальные сети',
    items: [
      {
        websiteLink: 'https://www.facebook.com/',
        logo: {
          default: facebook,
          gray: facebookGray
        }
      },
      {
        websiteLink: 'https://vk.com/',
        logo: {
          default: vk,
          gray: vkGray
        }
      },
      {
        websiteLink: 'https://web.telegram.org/',
        logo: {
          default: telegram,
          gray: telegramGray
        }
      },
      {
        websiteLink: 'https://www.instagram.com/',
        logo: {
          default: instagram,
          gray: instagramGray
        }
      },
    ]
  },
  {
    category: 'E-mail маркетинг',
    items: [
      {
        websiteLink: 'https://mailchimp.com/',
        logo: {
          default: mailchimp,
          gray: mailchimpGray
        }
      },
      {
        websiteLink: 'https://sendpulse.com/',
        logo: {
          default: sendpulse,
          gray: sendpulseGray
        }
      },
      {
        websiteLink: 'https://www.unisender.com/',
        logo: {
          default: unisender,
          gray: unisenderGray
        }
      },
    ]
  },
  {
    category: 'Мессенджеры',
    items: [
      {
        websiteLink: 'https://salebot.pro/',
        logo: {
          default: salebot,
          gray: salebotGray
        }
      },
      {
        websiteLink: 'https://wazzup24.com/',
        logo: {
          default: wazzup,
          gray: wazzupGray
        }
      },
      {
        websiteLink: 'https://www.pact.im/',
        logo: {
          default: pact,
          gray: pactGray
        }
      },
    ]
  },
  {
    category: 'Телефония',
    items: [
      {
        websiteLink: 'https://www.freepbx.org/',
        logo: {
          default: pbx,
          gray: pbxGray
        }
      },
      {
        websiteLink: 'https://sipuni.com/',
        logo: {
          default: sipuni,
          gray: sipuniGray
        }
      },
      {
        websiteLink: 'https://www.mango-office.ru/',
        logo: {
          default: mangoOffice,
          gray: mangoOfficeGray
        }
      },
    ]
  },
  {
    category: 'Голосовые прозвоны',
    items: [
      {
        websiteLink: 'https://calldog.ru/',
        logo: {
          default: zvonPes,
          gray: zvonPesGray
        }
      },
    ]
  },
  {
    category: 'Складские сервисы',
    items: [
      {
        websiteLink: 'https://www.moysklad.ru/',
        logo: {
          default: mySklad,
          gray: mySkladGray
        }
      },
    ]
  },
  {
    category: 'Бизнес аналитика',
    items: [
      {
        websiteLink: 'https://powerbi.microsoft.com/en/',
        logo: {
          default: powerBI,
          gray: powerBIGray
        }
      },
    ]
  },
    {
    category: 'Бухгалтерия',
    items: [
      {
        websiteLink: 'https://1c.ru/',
        logo: {
          default: c1,
          gray: c1Gray
        }
      },
    ]
  },
  {
    category: 'sms рассылки',
    items: [
      {
        websiteLink: 'https://smsc.ru/',
        logo: {
          default: smsCenter,
          gray: smsCenterGray
        }
      },
      {
        websiteLink: 'https://sms.ru/',
        logo: {
          default: smsRu,
          gray: smsRuGray
        }
      },
    ]
  },
  {
    category: 'Сервисы',
    items: [
      {
        websiteLink: 'https://yandex.com/',
        logo: {
          default: yandex,
          gray: yandexGray
        }
      },
      {
        websiteLink: 'https://www.google.com/',
        logo: {
          default: google,
          gray: googleGray
        }
      },
    ]
  },
  {
    category: 'Онлайн-банкинг',
    items: [
      {
        websiteLink: 'https://www.tinkoff.ru/',
        logo: {
          default: tinkoff,
          gray: tinkoffGray
        }
      },
      {
        websiteLink: 'https://yookassa.ru/',
        logo: {
          default: ukassa,
          gray: ukassaGray
        }
      },
    ]
  },
]

export type IntegrationCategoryType = typeof categories[0];
export type IntegrationCategoryItemType = typeof categories[0]['items'][0];

export const Integration: React.FC = () => {
  let Categories = categories.map((i, index) => <Category {...i} key={index} />);

  return <section className="mt80-160 relative" id='integration'>
    <Ball className='w-10 h-10 right-0 top-[15%]' color='yellow' />
    <Ball className='w-16 h-16 -bottom-20 right-1/4' color='red' />
    <Light className='bg-orange top-[15%] -right-16' size={200} />
    <Light className='bg-dark-red top-1/2 -translate-y-1/2 -left-12' size={200} />
    <Light className='bg-purple bottom-[20%] translate-x-1/2 right-1/2' size={200} />
    <h2>Интеграция</h2>
    <p className="text24 mt40-70 max-w-[15em]">
      <span className='orange-to-red-text'>Интегрируем </span>
      и дорабатываем практически
      <span className="orange-to-red-text"> любой сервис </span>
      в AmoCRM
    </p>
    <div className='mt30-50 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4'>
      {Categories}
    </div>
  </section>
};
