import { Item } from "./Item";
import { CostCalculationAnswerType, CostCalculationItemType } from "../CostCalculation";

type Props = {
  items: CostCalculationItemType[]
  answers: CostCalculationAnswerType[]
  handleAnswers: (newAnswer: CostCalculationAnswerType) => void
}

export const Questions: React.FC<Props> = ({ items, answers, handleAnswers }) => {
  let Items = items.map((d, index) => <Item activeItems={answers} setActiveItems={handleAnswers} id={index + 1} {...d} key={index} />)

  return <div className="mt-7">
    <div className="flex flex-col gap-y-7 md:gap-y-10">
      {Items}
    </div>
  </div>
};