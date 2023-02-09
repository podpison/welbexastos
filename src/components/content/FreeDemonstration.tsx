import { ElementWithPhoneForm } from '../ui/ElementWithPhoneForm';

export const FreeDemonstration: React.FC = () => {
  return <ElementWithPhoneForm
    heading='Бесплатная демонстрация'
    orangeText='Запишитесь на/бесплатную демонстрацию AmoCRM/'
    orangeTextClassName='max-w-[15em]'
    additionText='Мы быстро внедрим и настроим amoCRM в вашей компании!'
    additionTextClassName='max-w-[13em]'
    buttonSign='Записаться на демонстрацию'
    type='freeDemonstration'
  />
};