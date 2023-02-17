import { useResize } from "../../../../hooks/useResize";
import { ThankfulLettersItemType } from "../../../../redux/reducers/static";
import { DraggableItems } from "../../../ui/draggableItems/DraggableItems";
import { Item } from "./Item";
import './styles.scss';

type Props = {
  activeItemId: number
  setActiveItemId: React.Dispatch<React.SetStateAction<number>>
  items: ThankfulLettersItemType[]
}

export const Logos: React.FC<Props> = ({ activeItemId, items, setActiveItemId }) => {
  let innerWidth = useResize();
  let Items = items.map((i, index) => <Item {...i} activeItemId={activeItemId} setActiveItemId={setActiveItemId} key={index} />);

  if (innerWidth >= 768) {
    return <div className="grid gap-5 grid-cols-3 lg:col-[2]">
      {Items}
    </div>
  };

  return <DraggableItems className="flex gap-5 md:grid md:grid-cols-3" minItemWidth={175} defaultStyles={false} itemsCount={9}>
    {Items}
  </DraggableItems>
};