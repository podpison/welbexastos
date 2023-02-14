import { List } from '../ui/list/List';
import { ElementWithPhoneForm } from './../ui/ElementWithPhoneForm';
import { Ball } from './../ui/ball/Ball';

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
  >
    <Ball className='w-8 h-8 -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 sm:w-11 sm:h-11' zIndex='z-10' color='yellow' />
  </ElementWithPhoneForm>
};