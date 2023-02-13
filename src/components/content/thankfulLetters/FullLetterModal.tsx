import { Modal } from './../../ui/Modal';
import { ThankfulLetterItemType } from './ThankfulLetters';

type Props = {
  items: ThankfulLetterItemType[]
  fullLetterId: number | null
  setFullLetterId: React.Dispatch<React.SetStateAction<number | null>>
}

export const FullLetterId: React.FC<Props> = ({ items, fullLetterId, setFullLetterId }) => {
  let currentItem = items.find(i => i.id === fullLetterId);
  
  const setIsActive = () => {
    setFullLetterId(null);
  };


  return <Modal isActive={fullLetterId === null ? false : true} setIsActive={setIsActive}>
    <h6>Благодарственное письмо</h6>
    <p>{currentItem?.companyName}</p>
    <p>{currentItem?.letter}</p>
  </Modal>
};