import { Modal } from './../../ui/Modal';

type Props = {
  isActive: boolean
  setIsActive: () => void
}

export const SuccessfulOrderModal: React.FC<Props> = ({ isActive, setIsActive }) => {
  return <Modal isActive={isActive} setIsActive={setIsActive}>
    <h3 className='orange-to-red-text text40'>Спасибо за вашу заявку!</h3>
    <p className="text16-18 mt-7">Наш менеджер свяжется с вами в ближайшее время и уточнит все детали.</p>
  </Modal>
};