import { Button } from "../../../ui/Button";
import { CostCalculationAnswerType, CostCalculationItemType } from "./Questions";
import cn from 'classnames';

type Props = {
  activeItems: CostCalculationAnswerType[]
  setActiveItems: (item: CostCalculationAnswerType) => void
  id: number
} & CostCalculationItemType

export const Item: React.FC<Props> = ({ heading, answers, activeItems, answersContainerClassName, type, setActiveItems, id }) => {
  let currentItem = activeItems.find(i => i.type === type);

  let Items = answers.map((a, index) => {
    let isActive = currentItem?.item === a;

    return <Button
      className={cn(
        "px-2 py-1 border",
        isActive ? 'border-transparent bg-blue-hover' : 'bg-black border-light-stroke hover:bg-blue',
      )}
      paddings={false}
      onClick={() => setActiveItems({ item: a, type })}
      isBlue={false}
      key={index}
    >
      {a}
    </Button>
  }
  );

  return <div>
    <h6 className="text16-18">{id}. {heading}</h6>
    <div className={cn("flex flex-wrap gap-2.5 mt-5 md:gap-5", answersContainerClassName)}>{Items}</div>
  </div>
};