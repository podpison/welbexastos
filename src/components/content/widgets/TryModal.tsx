import { WidgetsItemType } from '../../../redux/reducers/static';
import { PhoneForm } from '../../ui/phoneForm/PhoneForm';
import { Modal } from './../../ui/Modal';

type Props = {
  isActive: boolean
  setIsActive: () => void
  currentItem: WidgetsItemType
  setIsSuccessModalActive: () => void
}

export const TryModal: React.FC<Props> = ({ isActive, setIsActive, currentItem, setIsSuccessModalActive }) => {
  let additionData = {
    widgetId: currentItem?.id
  };

  const onFormSuccess = () => {
    setIsActive();
    setIsSuccessModalActive();
  };

  return <Modal className='max-w-[640px]' isActive={isActive} setIsActive={setIsActive}>
    <h3 className='orange-to-red-text text40'>Подтверждение действия</h3>
    <p className='mt10-30 text16-18'>Текущий виджет: <span>{currentItem?.name}</span></p>
    <PhoneForm
      className='mt10-20'
      buttonSign='Попробовать'
      type='tryWidget'
      onSuccess={onFormSuccess}
      additionData={additionData}
    />
  </Modal>
};