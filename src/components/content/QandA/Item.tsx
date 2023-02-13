import { List } from "../../ui/list/List";
import { QandAItemType } from "./QandA";
import cn from 'classnames';
import { ChevronDown } from "../../ui/ChevronDown";

type Props = {
  isOpen: boolean
  onClick: (newActiveItemId: number) => void
} & QandAItemType

export const Item: React.FC<Props> = ({ answer, question, id, isOpen, onClick }) => {

  return <div className={cn("gradient-border-hover border-[0.5px] border-light-stroke transition-all cursor-pointer", isOpen && 'gradient-border')} onClick={() => onClick(id)}>
    <div
    className="group flex items-center justify-between transition-all gap-x-5 py-2.5 px-4 sm:py-4 sm:px-5 md:py-5 md:px-7"
    style={{background: isOpen ? 'linear-gradient(95.49deg, rgba(255, 246, 233, 0.1) 8.22%, rgba(26, 29, 35, 0.1) 75.4%)' : 'transparent'}}
    >
      <h6 className="text16-18">{question}</h6>
      <ChevronDown className="" isOpen={isOpen} />
    </div>
    <List className={cn("flex flex-col gap-y-5 transition-all duration-300 px-4 sm:px-5 md:px-7", isOpen ? 'mt10-30 pb-2.5 sm:pb-4 md:pb-5' : 'h-0 opacity-0 invisible')} items={answer} />
  </div>
};