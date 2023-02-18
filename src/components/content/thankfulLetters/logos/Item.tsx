import cn from 'classnames';
import { ThankfulLettersItemType } from '../../../../redux/reducers/static';

type Props = {
  activeItemId: number
  setActiveItemId: React.Dispatch<React.SetStateAction<number>>
} & ThankfulLettersItemType

export const Item: React.FC<Props> = ({ logo, id, activeItemId, setActiveItemId }) => {
  const handleClick = () => {
    setActiveItemId(id);
  };

  return <div
    className={cn(
      "thankful-letters__item p-4 transition-all border border-light-stroke bg-black/60 cursor-pointer sm:px-5 sm:py-6 md:px-6 md:py-8 lg:py-10",
      id === activeItemId && 'thankful-letters__item_active'
    )}
    style={{ background: id === activeItemId ? 'linear-gradient(95.49deg, rgba(255, 246, 233, 0.1) 8.22%, rgba(26, 29, 35, 0.1) 75.4%)' : undefined }}
    onClick={handleClick}
  >
    <img className='mx-auto' src={logo} alt='логотип' />
  </div>
};