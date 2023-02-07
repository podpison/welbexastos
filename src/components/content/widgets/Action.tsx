import { Button } from "../../ui/Button";
import { List } from "../../ui/list/List";

const items = [
  '1 месяц бесплатно',
  'Затем выберите тариф на 6, 9, 12 или 24 месяца'
]

export const Action: React.FC = () => {
  return <div className="bg-black pt-5 px-4 sm:pt-5 sm:px-6 lg:pt-5 lg:px-7">
    <h6>Попробуйте виджет бесплатно:</h6>
    <List className="flex flex-col gap-y-2.5 md:gap-y-4 mt-4" items={items} />
    <Button className="mt-5 w-[calc(100%_+_32px)] -ml-4 sm:w-[calc(100%_+_48px)] sm:-ml-6 lg:w-[calc(100%_+_56px)] lg:-ml-7">Попробовать бесплатно</Button>
  </div>
};