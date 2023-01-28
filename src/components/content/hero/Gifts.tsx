import { Button } from "../../ui/Button";
import { List } from "../../ui/list/List";

const gifts = [
  'Skype аудит',
  '30 виджетов',
  'Dashboard',
  'Месяц аmoCRM'
]

export const Gifts: React.FC = () => {
  return <div className="flex flex-col">
    <p className="text18 max-w-[16em] md:text-end">Вместе с
      <span className="orange-to-red-text"> бесплатной консультацией </span>
      мы дарим:
    </p>
    <List className="grid grid-cols-[repeat(2,_max-content)] gap-2.5 mt-5 sm:mt-6 sm:gap-3 md:gap-6 md:mt-8 md:justify-end md:items-end lg:mt-10 lg:gap-7" items={gifts} />
    <div className="flex justify-center mt-20">
      <Button className="md:w-full">Получить консультацию</Button>
      <Button className="bg-[#396ADB] md:hidden" isBlue={false}>Позвонить нам</Button>
    </div>
  </div>
};