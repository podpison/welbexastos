import { useResize } from "../../../../hooks/useResize";
import { DraggableItems } from "../../../ui/draggableItems/DraggableItems";
import { ThankfulLetterItemType } from "../ThankfulLetters";
import { Item } from "./Item";
import './styles.scss';

type Props = {
  activeItemId: number
  setActiveItemId: React.Dispatch<React.SetStateAction<number>>
  items: ThankfulLetterItemType[]
}

export const Logos: React.FC<Props> = ({ activeItemId, items, setActiveItemId }) => {
  let innerWidth = useResize();
  let Items = items.map((i, index) => <Item {...i} activeItemId={activeItemId} setActiveItemId={setActiveItemId} key={index} />);

  if (innerWidth >= 768) {
    return <div className="grid grid-cols-3 gap-5 col-[2]">
      {Items}
    </div>
  }

  return <DraggableItems className="flex gap-5" minItemWidth={175} defaultStyles={false} itemsCount={9}>
    {Items}
  </DraggableItems>
};