import { useState, useEffect } from 'react';
import { Select } from './select/Select';
import { Action } from './Action';
import { Ball } from '../../ui/ball/Ball';
import { Light } from '../../ui/Light';
import { Glass } from '../../ui/glass/Glass';
import { WidgetsItemType } from '../../../redux/reducers/static';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectWidgetItems } from '../../../redux/selectors';
import { TryModal } from './TryModal';
import { SuccessModal } from '../../ui/SuccessModal';

export const Widgets: React.FC = () => {
  useStaticItems('widgets');
  let items = useSelector(selectWidgetItems);
  const [currentItem, setCurrentItem] = useState<WidgetsItemType>(items[0]);

  const [isTryModalOpen, setIsTryModalOpen] = useState(false);
  const handleTryModalStatus = () => setIsTryModalOpen(prev => !prev);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSuccessModalStatus = () => setIsSuccessModalOpen(prev => !prev);

  useEffect(() => {
    currentItem === undefined && setCurrentItem(items[0]);
  }, [items.length]);

  return <section className="mt80-160 relative" id='widgets'>
    <TryModal currentItem={currentItem} isActive={isTryModalOpen} setIsActive={handleTryModalStatus} setIsSuccessModalActive={handleSuccessModalStatus} />
    <SuccessModal isActive={isSuccessModalOpen} setIsActive={handleSuccessModalStatus} />
    <Ball className='w-7 h-7 top-[15%] -right-[14px]' color='purple' />
    <Light className='bg-dark-red top-1/2 -translate-y-1/2 -left-16' size={180} />
    <Light className='bg-orange bottom-0 -right-12' size={180} />
    <div>
      <h2>Виджеты</h2>
      <div className='mt40-70 flex flex-wrap items-center justify-between gap-x-1 gap-y-7 max-w-[770px]'>
        <p className="text24 font-bold max-w-[13em]">
          Для вас разработали
          <span className="orange-to-red-text"> готовые решения в виде виджетов</span>
        </p>
        <p className="text14-18 max-w-[15em]">20 виджетов помогут автоматизировать ваш отдел.</p>
      </div>
    </div>
    <div className='relative mt20-50 grid sm:grid-cols-[1fr_max-content] sm:gap-y-12 sm:gap-x-[4%] sm:border sm:border-gray md:gap-x-[8%]'>
      <Glass className='max-sm:hidden w-full h-full' style={{ background: 'linear-gradient(152.66deg, rgba(26, 29, 35, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }} />
      <Select currentItem={currentItem} items={items} setCurrentItem={setCurrentItem} />
      <Action onClick={handleTryModalStatus} widgetName={currentItem?.name} />
    </div>
  </section>
};