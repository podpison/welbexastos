import action1 from '../../../../assets/imgs/content/actionsAfterAudit/1.svg';
import action2 from '../../../../assets/imgs/content/actionsAfterAudit/2.svg';
import action3 from '../../../../assets/imgs/content/actionsAfterAudit/3.svg';
import { Item } from './Item';
import './styles.scss';

const actions = [
  {
    img: action1,
    heading: 'Продумаем функционал',
    descrption: 'Составим ТЗ с продуманным функционалом, что сократит ваш бюджет в будущем.'
  },
  {
    img: action2,
    heading: 'Обучим до результата',
    descrption: 'Составим подробную инструкцию по работе с решениями. Обучим одного из ваших сотрудников.'
  },
  {
    img: action3,
    heading: 'Настроим продажи на максимум',
    descrption: 'Сделаем работу отдела системной и легко прогнозируемой, а сотрудников эффективными.'
  },
]

export type ActionAfterAuditType = typeof actions[0];

export const Actions: React.FC = () => {
  let Actions = actions.map((a, index) => <Item {...a} key={index} />);

  return <div className="flex flex-wrap justify-between gap-5 mt-7 sm:mt-9 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:mt-12">
    {Actions}
  </div>
};