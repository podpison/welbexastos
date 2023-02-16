import { Button } from "../../ui/Button";
import { HashLink } from "../../ui/HashLink";
import { List } from "../../ui/list/List";

const gifts = [
  'Skype аудит',
  '30 виджетов',
  'Dashboard',
  'Месяц AmoCRM'
]

export const Gifts: React.FC = () => {
  return <div className="flex flex-col md:ml-auto">
    <p className="text18 max-w-[16em] md:text-end">Вместе с
      <span className="orange-to-red-text"> бесплатной консультацией </span>
      мы дарим:
    </p>
    <List className="grid grid-cols-[repeat(2,_max-content)] gap-2.5 mt-5 sm:mt-6 sm:gap-3 md:gap-6 md:mt-8 md:justify-end md:items-end lg:mt-10 lg:gap-7" items={gifts} />
    <div className="flex justify-center mt-20">
      <HashLink to="freeAudit">
        <Button className="text12-16 md:w-full">Получить консультацию</Button>
      </HashLink>
      <a href='tel:+7 495 471-41-63'>
        <Button className="text12-16 bg-[#396ADB] shadow-none hover:shadow-blue-shadow md:hidden" isBlue={false}>Позвонить нам</Button>
      </a>
    </div>
  </div>
};