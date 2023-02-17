import { Modal } from './../../ui/Modal';
import { useResize } from './../../../hooks/useResize';
import { ThankfulLettersItemType } from '../../../redux/reducers/static';

type Props = {
  items: ThankfulLettersItemType[]
  fullLetterId: number | null
  setFullLetterId: React.Dispatch<React.SetStateAction<number | null>>
}

export const FullLetterModal: React.FC<Props> = ({ items, fullLetterId, setFullLetterId }) => {
  let windowWidth = useResize();

  let currentItem = items.find(i => i.id === fullLetterId);
  let isMobile = windowWidth < 640;

  const setIsActive = () => {
    setFullLetterId(null);
  };

  return <Modal className='max-w-[1000px]' isActive={fullLetterId === null ? false : true} setIsActive={setIsActive}>
    <h2>{isMobile ? 'Благодарность клиента' : 'Благодарственное письмо'}</h2>
    <div className='mt10-20'>
      <p className="text24 font-medium">
        Компания
        <span className="orange-to-red-text"> {currentItem?.companyName}</span>
      </p>
      <small className="text14-18 text-dark-gray mt-1.5 sm:mt-2.5">{currentItem?.owner}</small>
    </div>
    <p className='mt10-30 overflow-y-auto'>{currentItem?.letter}</p>
  </Modal>
};