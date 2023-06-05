import { Item } from "./Item";
import './styles.scss';
import { useState } from 'react';
import { Light } from "../../ui/Light";
import { Ball } from './../../ui/ball/Ball';
import { useSelector } from 'react-redux';
import { selectServiceItems } from "../../../redux/selectors";
import { useStaticItems } from './../../../hooks/useStaticItems';
import { MovingBall } from "../../ui/MovingBall";
import { TryModal } from "../TryModal";
import { SuccessModal } from "../../ui/SuccessModal";

export const Services: React.FC = () => {
  useStaticItems('services');
  let items = useSelector(selectServiceItems);
  const [maxItemHeight, setMaxItemHeight] = useState(0);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccessModalStatus = () => setIsSuccessModalOpen(prev => !prev);
  let Items = items.map(i => <Item {...i} maxItemHeight={maxItemHeight} setMaxItemHeight={setMaxItemHeight} isActive={activeItem === i.heading} setIsActive={setActiveItem} key={i.id} />);

  return <section className="relative services mt80-160 max-sm:mt-48" id='services'>
    <Light className="bg-purple -bottom-56 -right-[150px]" size={180} />
    <Light className="bg-red top-2/5 -left-[150px]" size={180} />
    <MovingBall className="w-12 h-12 right-[10%] top-[3%]" maxDeviation={100} color="red" />
    <Ball className="w-5 h-5 -bottom-10 left-1/2 max-sm:-translate-x-1/2 md:left-[44%] lg:left-[44.7%]" color="yellow" />
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

    <SuccessModal isActive={isSuccessModalOpen} setIsActive={handleSuccessModalStatus} />
    <TryModal
      heading={`Текущая услуга: ${activeItem}`}
      itemId={items.find(i => i.heading === activeItem)?.id || 0}
      isActive={activeItem !== null}
      setIsActive={() => setActiveItem(null)}
      setIsSuccessModalActive={handleSuccessModalStatus}
    />
  </section>
};