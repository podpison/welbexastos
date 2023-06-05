import { Button } from "../../../ui/Button";
import cn from 'classnames';
import { CostCalculationAnswerType, CostCalculationItemType } from "../CostCalculation";

type Props = {
  activeItems: CostCalculationAnswerType[]
  setActiveItems: (item: CostCalculationAnswerType) => void
  id: number
} & CostCalculationItemType

export const Item: React.FC<Props> = ({ heading, answers, activeItems, type, setActiveItems, id }) => {
  let currentItem = activeItems.find(i => i.type === type);

  let Items = answers.map((a, index) => {
    let isActive = typeof a === 'object' ? currentItem?.item === a.value : currentItem?.item === a;

    return <Button
      className={cn(
        "px-2 py-1 border",
        isActive ? 'border-transparent' : 'bg-black border-light-stroke hover:bg-blue hover:shadow-blue-shadow',
      )}
      paddings={false}
      onClick={() => setActiveItems({ item: typeof a === 'object' ? a.value : a, type })}
      isBlue={isActive}
      key={index}
    >
      {typeof a === 'object'
        ? <span className="flex items-center gap-x-2">
          <img src={a.icon.src} alt={a.icon.alt} />
          {a.value}
        </span>
        : a
      }
    </Button>
  }
  );

  return <div>
    <h6 className="text16-18">{id}. {heading}</h6>
    <div className="flex flex-wrap gap-2.5 mt-5 md:gap-5">{Items}</div>
  </div>
};