import { ThankfulLetterItemType } from "../ThankfulLetters";
import cn from 'classnames';

type Props = {
  activeItemId: number
  setActiveItemId: React.Dispatch<React.SetStateAction<number>>
} & ThankfulLetterItemType

export const Item: React.FC<Props> = ({ logo, id, activeItemId, setActiveItemId }) => {
  const handleClick = () => {
    setActiveItemId(id);
  };

  return <div
    className={cn(
      "thankful-letters__item p-4 transition-all border border-light-stroke bg-black/60 sm:px-5 sm:py-6 md:px-6 md:py-8 lg:py-10",
      id === activeItemId && 'thankful-letters__item_active'
    )}
    onClick={handleClick}
  >
    <img src={logo} alt='логотип' />
  </div>
};