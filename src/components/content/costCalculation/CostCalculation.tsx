import { List } from "../../ui/list/List";
import { PhoneForm } from "../../ui/PhoneForm";
import { Sphere } from "../../ui/Sphere";
import { Questions } from "./questions/Questions";

const listItems = [
  'Аудит с лучшим экспертом компании',
  '30 виджетов',
  'Dashboard с показателями',
  '35 дней AmoCRM',
];

export const CostCalculation: React.FC = () => {
  return <section className="mt80-160 relative">
    <h2>Расчёт стоимости</h2>
    <div className="mt40-70 grid gap-y-5 sm:gap-x-[6%] sm:grid-cols-[31%_1fr] md:grid-cols-[36%_1fr] md:gap-x-[10%]">
      <div className="">
        <p className="text24 font-medium sm:max-w-[14em]">
          Ответьте на 4 вопроса и получите
          <span className="orange-to-red-text"> расчёт стоимости внедрения AmoCRM</span>
        </p>
        <p className="montserrat text14-18 mt10-20">И сэкономьте 80% своего времени.</p>
      </div>
      <div className="">
        <h5 className="text16-18 font-medium">При заказе с сайта вы получите 4 бонуса от компании:</h5>
        <List className="grid gap-y-2.5 mt-4 sm:grid-cols-[calc(60%_-_16px)_40%] sm:gap-x-4 md:mt-7 lg:gap-x-7" items={listItems} />
      </div>
    </div>
    <div className="relative grid sm:grid-cols-[31%_1fr] md:grid-cols-[36%_1fr] sm:gap-x-[6%] md:gap-x-[10%]">
      <Sphere className="w-3/4 left-1/2 -bottom-[110px] w-[260px] max-sm:-translate-x-1/2 sm:max-w-none sm:relative sm:w-full sm:-translate-y-1/2 sm:top-1/2 sm:left-auto" />
      <div className="sm:col-[2]">
        <Questions />
        <PhoneForm className="mt-5" buttonSign="Получить расчёт" type="audit" />
      </div>
    </div>
  </section>
};