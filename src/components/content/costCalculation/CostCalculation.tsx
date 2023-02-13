import { List } from "../../ui/list/List";
import { PhoneForm } from "../../ui/PhoneForm";
import { Sphere } from "../../ui/Sphere";
import { Questions } from "./questions/Questions";
import { useState } from 'react';
import widgetImg from './../../../assets/imgs/content/costCalculation/widget.svg';
import discountImg from './../../../assets/imgs/content/costCalculation/discount.svg';
import { Light } from "../../ui/Light";
import { SuccessfulOrderModal } from "./SuccessfulOrderModal";

const listItems = [
  'Аудит с лучшим экспертом компании',
  '30 виджетов',
  'Dashboard с показателями',
  '35 дней AmoCRM',
];

const questionItemsData = [
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

export type CostCalculationItemType = typeof questionItemsData[0];
export type CostCalculationAnswerType = {
  type: string
  item: string | JSX.Element
};

const defaultAnswers = [
  { type: questionItemsData[0].type, item: questionItemsData[0].answers[0] },
  { type: questionItemsData[1].type, item: questionItemsData[1].answers[0] },
  { type: questionItemsData[2].type, item: questionItemsData[2].answers[0] },
  { type: questionItemsData[3].type, item: questionItemsData[3].answers[0] },
]

export const CostCalculation: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [answers, setAnswers] = useState<CostCalculationAnswerType[]>(defaultAnswers);

  const handleSetAnswers = (newAnswer: CostCalculationAnswerType) => {
    let filtredAnswers = answers.filter(a => a.type !== newAnswer.type);
    setAnswers([...filtredAnswers, newAnswer]);
  }
  const handleModalStatus = () => {
    setIsModalActive(prev => !prev);
    setAnswers(defaultAnswers);
  };

  return <section className="mt80-160 relative" id='costCalculation'>
    <SuccessfulOrderModal isActive={isModalActive} setIsActive={handleModalStatus} />
    <h2>Расчёт стоимости</h2>
    <div className="mt40-70 grid gap-y-5 sm:gap-x-[6%] sm:grid-cols-[31%_1fr] md:grid-cols-[36%_1fr] md:gap-x-[10%]">
      <div className="flex flex-wrap items-center gap-y-2.5 gap-x-[10%]">
        <p className="text24 font-medium max-w-[14em]">
          Ответьте на 4 вопроса и получите
          <span className="orange-to-red-text"> расчёт стоимости внедрения AmoCRM</span>
        </p>
        <p className="montserrat text14-18 max-w-[13em]">И сэкономьте 80% своего времени.</p>
      </div>
      <div className="">
        <h5 className="text16-18 font-medium">При заказе с сайта вы получите 4 бонуса от компании:</h5>
        <List className="grid gap-y-2.5 mt-4 sm:grid-cols-[calc(60%_-_16px)_40%] sm:gap-x-4 md:mt-7 lg:gap-x-7" items={listItems} />
      </div>
    </div>
    <div className="relative grid sm:grid-cols-[31%_1fr] md:grid-cols-[36%_1fr] sm:gap-x-[6%] md:gap-x-[10%]">
      <Light className="bg-orange opacity-30 bottom-0 left-0" size={350} />
      <Sphere className="left-1/2 -bottom-[100px] w-[260px] max-sm:-translate-x-1/2 sm:max-w-none sm:relative sm:w-full sm:-translate-y-1/2 sm:top-1/2 sm:left-auto" />
      <div className="sm:col-[2]">
        <Questions items={questionItemsData} answers={answers} handleAnswers={handleSetAnswers} />
        <PhoneForm className="mt-5" buttonSign="Получить расчёт" type="audit" additionData={answers} onSuccess={handleModalStatus} />
      </div>
    </div>
  </section>
};