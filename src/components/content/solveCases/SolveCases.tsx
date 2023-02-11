import { DraggableItems } from "../../ui/draggableItems/DraggableItems";
import { Item } from "./Item";

const items = [
  {
    heading: {
      heading: '+50%',
      description: 'Успешно закрытых сделок'
    },
    description: 'Компания по обслуживанию канализаций',
    video: 'rmKX608rVQ0',
    id: 0
  },
  {
    heading: {
      heading: '+30%',
      description: 'Скорость завершения сделок'
    },
    description: 'Компания по разработке индивидуального дизайна',
    video: 'pkNOp7mUW2g',
    id: 1
  },
    {
    heading: {
      heading: 'В 5 раз',
      description: 'Увеличили скорость работы логиста'
    },
    description: 'Курьерская служба',
    video: '4HTD3aN6dEY',
    id: 2
  },
  {
    heading: {
      heading: '+70%',
      description: 'KPI сотрудников'
    },
    description: 'Создание системы мотивации сотрудников',
    video: 'pTMK62lPGXk',
    id: 3
  },
]

export type SolveCasesItemType = typeof items[0];

export const SolveCases: React.FC = () => {
  let Items = items.map(i => <Item {...i} key={i.id} />);

  return <section className="mt80-160">
    <h2>Кейсы решений</h2>
    <div className='mt40-70 flex items-center gap-y-7 gap-x-5 max-sm:justify-between max-sm:flex-wrap sm:gap-x-[10%]'>
      <p className="text24 max-w-[18em]">
        Оцените результаты
        <span className='orange-to-red-text'> внедрения AmoCRM</span>
      </p>
      <p className="text14-18 max-w-[17em]">Ваш бизнес тоже станет эффективнее!</p>
    </div>
    <DraggableItems className="md:grid-cols-3" minItemWidth={210}>
      {Items}
    </DraggableItems>
  </section>
};