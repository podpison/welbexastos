import { DraggableItems } from "../../ui/draggableItems/DraggableItems";
import { Item } from "./Item";
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectSolveCaseItems } from "../../../redux/selectors";

export const SolveCases: React.FC = () => {
  useStaticItems('solveCases');
  let items = useSelector(selectSolveCaseItems);

  let Items = items.map((i, index, arr) => <Item {...i} isFirst={index === 0} isLast={index === arr.length - 1} key={i.id} />);

  return <section className="mt80-160" id='cases'>
    <h2>Кейсы решений</h2>
    <div className='mt40-70 flex items-center gap-y-7 gap-x-5 max-sm:justify-between max-sm:flex-wrap sm:gap-x-[10%]'>
      <p className="text24 max-w-[18em]">
        Оцените результаты
        <span className='orange-to-red-text'> внедрения AmoCRM</span>
      </p>
      <p className="text14-18 max-w-[17em]">Ваш бизнес тоже станет эффективнее!</p>
    </div>
    <DraggableItems className="md:grid-cols-3" minItemWidth={210}>
      {Items}
    </DraggableItems>
  </section>
};