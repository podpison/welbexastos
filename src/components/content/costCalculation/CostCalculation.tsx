import { List } from "../../ui/list/List";
import { Questions } from "./questions/Questions";

const listItems = [
  'Аудит с лучшим экспертом компании',
  '30 виджетов',
  'Dashboard с показателями',
  '35 дней AmoCRM',
];

export const CostCalculation: React.FC = () => {
  return <section className="mt80-160">
    <h2>Расчёт стоимости</h2>
    <div className="mt40-70 flex gap-y-5 max-sm:flex-col sm:gap-x-[4%] md:gap-x-[6%]">
      <div className="">
        <p className="text24 font-medium sm:max-w-[14em]">
          Ответьте на 4 вопроса и получите
          <span className="orange-to-red-text"> расчёт стоимости внедрения AmoCRM</span>
        </p>
        <p className="montserrat text14-18 mt10-20">И сэкономьте 80% своего времени.</p>
      </div>
      <div className="sm:mx-auto">
        <h5 className="text16-18 font-medium">При заказе с сайта вы получите 4 бонуса от компании:</h5>
        <List className="grid gap-y-2.5 mt-4 sm:grid-cols-[repeat(2,_max-content)] sm:gap-x-4 md:mt-7 lg:gap-x-7" items={listItems} />
      </div>
    </div>
    <Questions />
  </section>
};