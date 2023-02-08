import { Button } from "../../ui/Button";
import { List } from "../../ui/list/List";

type Props = {
  widgetName: string
}

const items = [
  '1 месяц бесплатно',
  'Затем выберите тариф на 6, 9, 12 или 24 месяца'
]

export const Action: React.FC<Props> = ({ widgetName }) => {
  return <div className="bg-black pt-5 px-4 sm:pt-5 sm:px-6 sm:mt-auto sm:ml-[7%] lg:flex lg:items-center lg:justify-between lg:gap-x-2 lg:py-6 lg:px-7">
    <div className="lg:max-w-[320px]">
      <h6>Попробуйте виджет «{widgetName}» бесплатно:</h6>
      <List className="flex flex-col gap-y-2.5 md:gap-y-4 mt-4" items={items} />
    </div>
    <Button className="mt-5 w-[calc(100%_+_32px)] -ml-4 sm:w-[calc(100%_+_48px)] sm:-ml-6 lg:w-fit lg:h-fit lg:m-0">Попробовать бесплатно</Button>
  </div>
};