import { Button } from "../../../ui/Button";
import { CostCalculationAnswerType, CostCalculationItemType } from "./Questions";
import cn from 'classnames';

type Props = {
  activeItems: CostCalculationAnswerType[]
  setActiveItems: (item: CostCalculationAnswerType) => void
} & CostCalculationItemType

export const Item: React.FC<Props> = ({ heading, answers, activeItems, type, setActiveItems }) => {
  let currentItem = activeItems.find(i => i.type === type);

  let Items = answers.map((a, index) => {
    let isActive = currentItem?.item === a;

    return <Button
      className={cn("px-2 py-1 border", !isActive ? 'bg-black border-light-stroke' : 'border-transparent')}
      paddings={false}
      onClick={() => setActiveItems({ item: a, type })}
      isBlue={isActive}
      key={index}
    >
      {a}
    </Button>
  }
  );

  return <div>
    <h6 className="text16-18">{heading}</h6>
    <div className="flex flex-wrap gap-2.5 mt-5 md:gap-5">{Items}</div>
  </div>
};