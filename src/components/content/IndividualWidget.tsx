import { ElementWithPhoneForm } from '../ui/ElementWithPhoneForm';
import { MovingBall } from './../ui/MovingBall';

export const IndividualWidget: React.FC = () => {
  return <div className='relative'>
    <MovingBall className='w-11 h-11 -bottom-14 left-[35%] -translate-x-1/2' maxDeviation={50} duration={2700} color='yellow' />
    <ElementWithPhoneForm
      heading='Индивидуальный виджет'
      orangeText='/Разработаем виджет индивидуально/ под ваши задачи'
      orangeTextClassName='max-w-[13em]'
      additionText='Если вы не нашли подходящий из готовых вариантов.'
      additionTextClassName='max-w-[13em]'
      buttonSign='Заказать виджет'
      type='individualWidget'
    />
  </div>
};