import { List } from "../../ui/list/List";
import { QandAItemType } from "./QandA";
import cn from 'classnames';
import { ChevronDown } from "../../ui/ChevronDown";

type Props = {
  isOpen: boolean
  onClick: (newActiveItemId: number) => void
} & QandAItemType

export const Item: React.FC<Props> = ({ answer, question, id, isOpen, onClick }) => {

  return <div className="border-[0.5px] border-light-stroke py-2.5 px-4 sm:py-4 sm:px-5 md:py-5 md:px-7" onClick={() => onClick(id)}>
    <div className="group flex items-center justify-between gap-x-5 cursor-pointer">
      <h6 className="text16-18">{question}</h6>
      <ChevronDown className="" isOpen={isOpen} />
    </div>
    <List className={cn("flex flex-col gap-y-5 transition-all duration-300", isOpen ? 'mt10-30' : 'h-0 opacity-0 invisible')} items={answer} />
  </div>
};