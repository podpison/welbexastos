import { Item } from './Item';
import { Ball } from './../../ui/ball/Ball';
import { Light } from './../../ui/Light';
import { DraggableItems } from '../../ui/draggableItems/DraggableItems';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectOurClientItems } from '../../../redux/selectors';
import { MovingBall } from './../../ui/MovingBall';

export const OurClients: React.FC = () => {
  useStaticItems('ourClients');
  let items = useSelector(selectOurClientItems);

  const Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className="mt80-160 relative" id='ourClients'>
    <Ball className='w-10 h-10 top-12 -left-5 sm:top-[52px] md:top-14 lg:top-[68px]' color='purple' />
    <MovingBall className='w-12 h-12 -bottom-[10%] left-[20%]' maxDeviation={70} duration={2680} color='yellow' />
    <Light className='bg-dark-red right-[30%] top-[5%] translate-x-[30%]' size={200} />
    <Light className='bg-orange left-[30%] -bottom-20 -translate-x-[30%]' size={150} />
    <h2>Наши клиенты</h2>
    <div className="mt40-70 flex items-center gap-y-7 gap-x-5 max-sm:justify-between max-sm:flex-wrap sm:gap-x-[10%]">
      <p className="text24 max-w-[18em]">
        Внедрили AmoCRM и увеличили продажи
        <span className='orange-to-red-text'> для клиентов в абсолютно разных нишах</span>
      </p>
      <p className="text14-18 max-w-[17em]">Для малого, среднего и крупного бизнеса с бюджетом до 3 миллионов рублей.</p>
    </div>
    <DraggableItems minItemWidth={107}>
      {Items}
    </DraggableItems>
  </section>
};