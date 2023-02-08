import { Item } from "./Item";
import './styles.scss';
import { useState } from 'react';
import { Light } from "../../ui/Light";
import { Ball } from './../../ui/ball/Ball';

const items = [
  {
    id: 0,
    spriteClassName: 'license',
    heading: 'Продажа лицензии',
    description: 'При покупке или продлении amoCRM через нас, вы получаете дополнительные месяцы в подарок для каждого пользователя.'
  },
  {
    id: 1,
    spriteClassName: 'shield-key',
    heading: 'Внедрение AmoCRM под ключ',
    description: 'Правильно настроенная CRM-система даёт гарантированный результат и выход на новый уровень.'
  },
  {
    id: 2,
    spriteClassName: 'audit',
    heading: 'Аудит и стратегия',
    description: 'Проведём аудит, найдём слабые места и составим стратегию развития вашей CRM-системы и отдела продаж.'
  },
  {
    id: 3,
    spriteClassName: 'support',
    heading: 'Сопровождение, развитие, техническая помощь',
    description: 'Персональный менеджер всегда на связи по любым вопросам.'
  },
  {
    id: 4,
    spriteClassName: 'develop',
    heading: 'Индивидуальная разработка, кастомизация, доработка',
    description: 'Создадим под ваши бизнес процессы и задачи нестандартное решение в CRM-системе.'
  },
  {
    id: 5,
    spriteClassName: 'widget-rent',
    heading: 'Аренда виджетов',
    description: 'Закажите уже готовое решение под различные задачи.'
  },
  {
    id: 6,
    spriteClassName: 'education',
    heading: 'Обучение и аттестация',
    description: 'Проводим обучение для руководителей и линейного персонала.'
  },
  {
    id: 7,
    spriteClassName: 'dashboard',
    heading: 'Отчётность / Dashboard',
    description: 'Настроим и покажем как следить за ключевыми показателями.'
  },
  {
    id: 8,
    spriteClassName: 'integration',
    heading: 'Интеграции сервисов с AmoCRM',
    description: 'Интегрируем вашу CRM-систему с другими системами.'
  },
]

export type ServicesItemType = typeof items[0];

export const Services: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState<null | number>(null);

  let Items = items.map(i => <Item {...i} isActive={activeItemId === i.id} setIsActive={setActiveItemId} key={i.id} />);

  return <section className="relative scroll-top services mt80-160 max-sm:mt-48" id='services'>
    <Light className="bg-purple -bottom-56 -right-[150px]" size={180} />
    <Light className="bg-red top-2/5 -left-[150px]" size={180} />
    <Ball className="w-12 h-12 right-[10%] top-[3%]" color="red" />
    <Ball className="w-5 h-5 -bottom-10 left-[40%] -translate-x-[40%]" color="yellow" />
    <div>
      <h2>Услуги</h2>
      <div className="mt40-70 flex flex-wrap items-center gap-y-7 gap-x-4 max-sm:justify-between sm:gap-x-[20%]">
        <p className="text24 max-w-[13em]">
          Наша компания оказывает
          <span className="orange-to-red-text"> целый спектр услуг для вашего бизнеса</span>
        </p>
        <p className="text14-18 font-medium max-w-[17em]">От аудита отдела продаж до создания автоматизированной системы продаж.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8 mt-5 sm:grid-cols-2 sm:auto-rows-fr sm:mt-7 md:mt-9 lg:grid-cols-3 lg:mt-12">
      {Items}
    </div>
  </section>
};