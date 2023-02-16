import { Category } from './category/Category';
import { Light } from '../../ui/Light';
import { Ball } from '../../ui/ball/Ball';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectIntegrationItems } from '../../../redux/selectors';

export const Integration: React.FC = () => {
  useStaticItems('integration');
  let items = useSelector(selectIntegrationItems);
  let sortedItems = [...items].sort((a, b) => b.items.length - a.items.length);

  let Categories = sortedItems.map((i, index) => <Category {...i} key={index} />);

  return <section className="mt80-160 relative" id='integration'>
    <Ball className='w-10 h-10 -right-5 top-[15%]' color='yellow' />
    <Ball className='w-16 h-16 -bottom-20 right-1/4' color='red' />
    <Light className='bg-orange top-[15%] -right-16' size={200} />
    <Light className='bg-dark-red top-1/2 -translate-y-1/2 -left-12' size={200} />
    <Light className='bg-purple bottom-[20%] translate-x-1/2 right-1/2' size={200} />
    <h2>Интеграция</h2>
    <p className="text24 mt40-70 max-w-[15em]">
      <span className='orange-to-red-text'>Интегрируем </span>
      и дорабатываем практически
      <span className="orange-to-red-text"> любой сервис </span>
      в AmoCRM
    </p>
    <div className='mt30-50 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4'>
      {Categories}
    </div>
  </section>
};
