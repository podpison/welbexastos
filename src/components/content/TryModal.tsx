import { PhoneForm } from '../ui/phoneForm/PhoneForm';
import { Modal } from '../ui/Modal';

type Props = {
  heading: string
  itemId: number
  isActive: boolean
  setIsActive: () => void
  setIsSuccessModalActive: () => void
}

export const TryModal: React.FC<Props> = ({ isActive, heading, itemId, setIsActive, setIsSuccessModalActive }) => {
  let additionData = {
    itemId
  };

  const onFormSuccess = () => {
    setIsActive();
    setIsSuccessModalActive();
  };

  return <Modal className='max-w-[640px]' isActive={isActive} setIsActive={setIsActive}>
    <h3 className='orange-to-red-text text40'>Подтверждение действия</h3>
    <p className='mt10-30 text16-18'>{heading}</p>
    <PhoneForm
      className='mt10-20'
      buttonSign='Попробовать'
      type='tryServices'
      onSuccess={onFormSuccess}
      additionData={additionData}
    />
  </Modal>
};