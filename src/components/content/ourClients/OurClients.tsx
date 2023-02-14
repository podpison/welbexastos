import cleaning from '../../../assets/imgs/content/ourClients/cleaning.png';
import realEstate from '../../../assets/imgs/content/ourClients/realEstate.png';
import sportAndHealth from '../../../assets/imgs/content/ourClients/sportAndHealth.png';
import legalServices from '../../../assets/imgs/content/ourClients/legalServices.png';
import consulting from '../../../assets/imgs/content/ourClients/consulting.png';
import education from '../../../assets/imgs/content/ourClients/education.png';
import construction from '../../../assets/imgs/content/ourClients/construction.png';
import b2b from '../../../assets/imgs/content/ourClients/b2b.png';
import logistics from '../../../assets/imgs/content/ourClients/logistics.png';
import saleOfServicesAndGoods from '../../../assets/imgs/content/ourClients/saleOfServicesAndGoods.png';
import transportServices from '../../../assets/imgs/content/ourClients/transportServices.png';
import hrServices from '../../../assets/imgs/content/ourClients/hrServices.png';
import marketing from '../../../assets/imgs/content/ourClients/marketing.png';
import production from '../../../assets/imgs/content/ourClients/production.png';
import financialServices from '../../../assets/imgs/content/ourClients/financialServices.png';
import ITSphere from '../../../assets/imgs/content/ourClients/ITSphere.png';
import { Item } from './Item';
import { Ball } from './../../ui/ball/Ball';
import { Light } from './../../ui/Light';
import { DraggableItems } from '../../ui/draggableItems/DraggableItems';

const items = [
  {
    icon: cleaning,
    name: 'Клининг'
  },
  {
    icon: realEstate,
    name: 'Недвижимость'
  },
  {
    icon: sportAndHealth,
    name: 'Спорт и здоровье'
  },
  {
    icon: legalServices,
    name: 'Юридические услуги'
  },
  {
    icon: consulting,
    name: 'Консалтинг'
  },
  {
    icon: education,
    name: 'Образование'
  },
  {
    icon: construction,
    name: 'Строительство'
  },
  {
    icon: b2b,
    name: 'B2B поставки'
  },
  {
    icon: logistics,
    name: 'Логистика'
  },
  {
    icon: saleOfServicesAndGoods,
    name: 'Продажи услуг и товаров'
  },
  {
    icon: transportServices,
    name: 'Транспортные услуги'
  },
  {
    icon: hrServices,
    name: 'HR и онлайн-рекрутинг'
  },
  {
    icon: marketing,
    name: 'Маркетинг и реклама'
  },
  {
    icon: production,
    name: 'Производство'
  },
  {
    icon: financialServices,
    name: 'Финансовые услуги'
  },
  {
    icon: ITSphere,
    name: 'IT-сфера'
  },
]

export type OurClientsItemType = typeof items[0];

export const OurClients: React.FC = () => {
  const Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className="mt80-160 relative" id='ourClients'>
    <Ball className='w-10 h-10 top-12 -left-5 sm:top-[52px] md:top-14 lg:top-[68px]' color='purple' />
    <Ball className='w-12 h-12 -bottom-[10%] left-[20%]' color='yellow' />
    <Light className='bg-dark-red right-[30%] top-[5%] translate-x-[30%]' size={200} />
    <Light className='bg-orange left-[30%] -bottom-20 -translate-x-[30%]' size={150} />
    <h2>Наши клиенты</h2>
    <div className="mt40-70 flex items-center gap-y-7 gap-x-5 max-sm:justify-between max-sm:flex-wrap sm:gap-x-[10%]">
      <p className="text24 max-w-[18em]">
        Внедрили AmoCRM и увеличили продажи
        <span className='orange-to-red-text'> для клиентов в абсолютно разных нишах</span>
      </p>
      <p className="text14-18 max-w-[17em]">Для малого, среднего и крупного бизнеса с бюджетом до 3 миллионов рублей.</p>
    </div>
    <DraggableItems minItemWidth={107}>
      {Items}
    </DraggableItems>
  </section>
};