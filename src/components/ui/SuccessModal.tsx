import { Modal } from "./Modal";

type Props = {
  isActive: boolean
  setIsActive: () => void
}

export const SuccessModal: React.FC<Props> = ({ isActive, setIsActive }) => {
  return <Modal className='max-w-[530px]' isActive={isActive} setIsActive={setIsActive}>
    <h3 className='orange-to-red-text text40'>Спасибо за вашу заявку!</h3>
    <p className="text16-18 mt-7">Наш менеджер свяжется с вами в ближайшее время и уточнит все детали.</p>
  </Modal>
};