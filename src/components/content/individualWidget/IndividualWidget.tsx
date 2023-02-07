import { ElementWithPhoneForm } from './../../ui/ElementWithPhoneForm';
import { Ball } from './../../ui/ball/Ball';

export const IndividualWidget: React.FC = () => {
  return <div className='relative'>
    <Ball className='w-11 h-11 -bottom-14 left-[35%] -translate-x-1/2' color='yellow' />
    <ElementWithPhoneForm
      heading='Индивидуальный виджет'
      orangeText='/Разработаем виджет индивидуально/ под ваши задачи'
      additionText='Если вы не нашли подходящий из готовых вариантов.'
      buttonSign='Заказать виджет'
      type='individualWidget'
    />
  </div>
};