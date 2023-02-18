import { useState } from "react";
import { Item } from "./Item";
import { Light } from './../../ui/Light';
import { Ball } from "../../ui/ball/Ball";
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectQAndAItems } from "../../../redux/selectors";
import { MovingBall } from './../../ui/MovingBall';

export const QandA: React.FC = () => {
  useStaticItems('QAndA');
  let items = useSelector(selectQAndAItems);
  const [openItemId, setOpenItemId] = useState<null | number>(null);

  const handleItemClick = (newActiveItemId: number) => {
    newActiveItemId === openItemId ? setOpenItemId(null) : setOpenItemId(newActiveItemId)
  };

  const Items = items.map((i, index) => <Item {...i} isOpen={openItemId === i.id} onClick={handleItemClick} key={index} />);
  
  return <section className="mt80-160 relative" id='QAndA'>
    <Light className="bg-orange top-[211px] -translate-y-1/2 -left-8" size={190} />
    <Light className="bg-dark-red top-[211px] -translate-y-1/2 -right-8" size={190} />
    <MovingBall className="w-10 h-10 right-[10%] top-[105px]" maxDeviation={90} duration={3100} color="red" />
    <Ball className="w-10 h-10 left-[10%] top-[50px] md:top-[63px]" color="yellow" />
    <div>
      <h2>Вопрос / Ответ</h2>
      <div className="mt40-70 flex flex-wrap items-center gap-y-7 gap-x-4 max-sm:justify-between sm:gap-x-[20%]">
        <p className="text24 max-w-[13em]">
          Ответы на
          <span className="orange-to-red-text"> часто задаваемые вопросы</span>
        </p>
        <p className="text14-18 font-medium max-w-[17em]">Не нашли ответ на свой вопрос? Оставьте заявку на консультацию!</p>
      </div>
    </div>
    <div className="mt20-50">
      {Items}
    </div>
  </section>
};