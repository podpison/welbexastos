import { List } from '../../ui/list/List';
import { ElementWithPhoneForm } from './../../ui/ElementWithPhoneForm';

const phoneFormChildrenListItems = [
  'Аудит с лучшим экспертом компании',
  'Dashboard с показателями',
  '30 виджетов',
]

export const FreeAccessToTheSystem: React.FC = () => {
  return <ElementWithPhoneForm
    heading="Бесплатный доступ к системе"
    orangeText="Получите доступ к полному функционалу /AmoCRM на 35 дней/"
    orangeTextClassName="max-w-[14em]"
    additionText={[
      'Наш сотрудник ответит на все возникшие вопросы и проконсультирует по функционалу AmoCRM.',
      'Попробуйте уже сегодня и вы поймёте насколько это удобно и просто!',
    ]}
    additionTextClassName="max-w-[14em]"
    buttonSign="Получить доступ"
    type="freeAccessToTheSystem"
    phoneFormChildren={
      <div className='mb-5 sm:mb-7 md:md-9 lg:mb-10'>
        <p className='text16-18 max-w-[12em]'>Вместе с доступом к системе вы получите:</p>
        <List className='flex flex-col gap-y-2.5 mt-4 sm:mt-5 md:mt-7' items={phoneFormChildrenListItems} />
      </div>
    }
  />
};