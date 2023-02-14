import { List } from './../../ui/list/List';
import { useState } from 'react';
import './styles.scss';
import { SectionName } from './SectionName';
import { Light } from '../../ui/Light';
import { Ball } from './../../ui/ball/Ball';
import { useResize } from '../../../hooks/useResize';

const sections = [
  [
    'Нет времени на самостоятельное изучение и внедрение CRM системы.',
    'Отсутствие понимания для чего надо внедрять CRM систему. Какую пользу это принесёт бизнесу.',
    'Страх, что вложенные средства не окупятся.',
  ],
  [
    'Работа отдела продаж не является системной. Отдел является чёрным ящиком, работу которого нельзя спрогнозировать.',
    'Информация о клиентах хранится лично у менеджеров, что тормозит проект, если сотрудник не на месте. Также это даёт возможность увести клиентов из компании.',
    'Невозможно определить, какие сделки являются самыми прибыльными для компании, а какие не приносят результата.',
    'Сложно оценить эффективность работы отдельного сотрудника.',
  ],
]

export type WeSolveProblemsSectionType = typeof sections[0];
export type WeSolveProblemsCurrentSectionType = 0 | 1 | 'all';

export const WeSolveProblems: React.FC = () => {
  let innerWidth = useResize((width) => width > 768 ? setCurrentSection('all') : setCurrentSection(0));
  let areSectionsBlocked = innerWidth > 768;
  const [currentSection, setCurrentSection] = useState<WeSolveProblemsCurrentSectionType>(areSectionsBlocked ? 'all' : 0);

  const handleCurrentSection = (newSection: WeSolveProblemsCurrentSectionType) => {
    areSectionsBlocked ? setCurrentSection('all') : setCurrentSection(newSection);
  };

  return <section className="mt80-160">
    <div className='relative'>
      <Ball className='w-4 h-4 -right-[7px] top-1/4 sm:w-7 sm:h-7 sm:-right-[14px] md:w-9 md:h-9 md:-right-[18px] lg:w-12 lg:h-12 lg:-right-[24px]' color='yellow' />
      <h2>Мы решаем проблемы</h2>
      <div className='relative mt40-70 flex flex-wrap justify-between items-center md:grid md:grid-cols-[42%_1fr] md:gap-x-[5%]'>
        <Light className='bg-orange -right-[30px] md:-top-[400px]' size={200} />
        <p className="text24 max-w-[19em] font-bold">
          <span className="orange-to-red-text">99% компаний откладывают внедрение AmoCRM </span>
          или не доводят систему до результата</p>
        <p className="max-w-[17em] max-sm:mt-7">Всё это приводит к самой главной проблеме — потере денег.</p>
      </div>
    </div>
    <div className='relative mt-5 sm:mt-7 md:mt-9 lg:mt-12'>
      <Light className='bg-purple -right-[115px]' size={190} />
      <Light className='bg-dark-red -bottom-[50%] -left-[115px]' size={210} />
      <div className='grid grid-cols-2 gap-x-2 md:grid-cols-[37%_1fr] md:gap-x-[10%]'>
        <SectionName currentSection={currentSection} id={0} name='Вы работаете без AmoCRM' onClick={handleCurrentSection} />
        <SectionName currentSection={currentSection} id={1} name='AmoCRM не даёт результата' onClick={handleCurrentSection} />
      </div>
      <div className='mt-4 sm:mt-5 md:mt-7 md:grid md:grid-cols-[37%_1fr] md:gap-x-[10%]'>
        {currentSection !== 0 && <List className='flex flex-col gap-2.5 sm:gap-5 md:col-[2]' items={sections[1]} />}
        {currentSection !== 1 && <List className='flex flex-col gap-2.5 sm:gap-5 md:col-[1] md:row-[1]' items={sections[0]} />}
      </div>
    </div>
  </section>
};