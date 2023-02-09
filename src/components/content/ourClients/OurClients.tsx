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

  return <section className="mt80-160">
    <h2>Наши клиенты</h2>
    <div className="mt40-70">
      <p className="orange-to-red-text text24">
        Внедрили AmoCRM и увеличили продажи
        <span>для клиентов в абсолютно разных нишах</span>
      </p>
      <p className="text14-18">Для малого, среднего и крупного бизнеса с бюджетом до 3 миллионов рублей.</p>
    </div>
    <div>
      {Items}
    </div>
  </section>
};