import { Item } from "./Item";
import { useState } from 'react';
import widgetImg from './../../../../assets/imgs/content/costCalculation/widget.svg';
import discountImg from './../../../../assets/imgs/content/costCalculation/discount.svg';

const itemsData = [
  {
    heading: 'Пользуетесь amoCRM?',
    type: 'doYouUseAmoCRM',
    answers: [
      'Нет, планирую',
      'Да, меньше года',
      'Да, 1-3 года',
      'Да, более 3-х лет'
    ],
  },
  {
    heading: 'Сколько менеджеров у вас в штате?',
    type: 'managerCount',
    answers: [
      '1-3',
      '4-10',
      '11-20',
      'Более 20'
    ],
  },
  {
    heading: 'Пользуетесь виджетами?',
    type: 'doYouUseWidgets',
    answers: [
      'Нет',
      'Да, 1-3 виджета',
      'Да, 4-8 виджетов',
      'Да, более 8 виджетов'
    ],
  },
  {
    heading: 'Выберите бонус, который хотите получить',
    type: 'bonus',
    answersContainerClassName: 'flex flex-nowrap',
    answers: [
      <span className="flex items-center gap-x-2 min-w-[120px]">
        <img src={widgetImg} alt='виджет' />
        30 виджетов
      </span>,
      <span className="flex items-center gap-x-2">
        <img src={discountImg} alt='скидка' />
        20% на доработку AmoCRM
      </span>
    ],
  },
];

export type CostCalculationItemType = typeof itemsData[0];
export type CostCalculationAnswerType = {
  type: string
  item: string | JSX.Element
};

const defaultAnswers = [
  { type: itemsData[0].type, item: itemsData[0].answers[0] },
  { type: itemsData[1].type, item: itemsData[1].answers[0] },
  { type: itemsData[2].type, item: itemsData[2].answers[0] },
  { type: itemsData[3].type, item: itemsData[3].answers[0] },
]

export const Questions: React.FC = () => {
  const [answers, setAnswers] = useState<CostCalculationAnswerType[]>(defaultAnswers);

  const handleSetAnswers = (newAnswer: CostCalculationAnswerType) => {
    let filtredAnswers = answers.filter(a => a.type !== newAnswer.type);
    setAnswers([...filtredAnswers, newAnswer]);
  }

  let Items = itemsData.map((d, index) => <Item activeItems={answers} setActiveItems={handleSetAnswers} id={index + 1} {...d} key={index} />)

  return <div className="mt-7">
    <div className="flex flex-col gap-y-7 md:gap-y-10">
      {Items}
    </div>
  </div>
};