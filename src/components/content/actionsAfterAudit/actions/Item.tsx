import { IconWithGrayBg } from "../../../ui/iconWithGrayBg/IconWithGrayBg";
import { ActionAfterAuditType } from "./Actions";

type Props = {

} & ActionAfterAuditType

export const Item: React.FC<Props> = ({ descrption, heading, spriteClassName }) => {
  return <div className="flex flex-col gap-y-2.5 max-w-[290px] sm:last:mx-auto md:gap-y-5 lg:last:mx-0">
    <IconWithGrayBg spriteClassName={spriteClassName} />
    <h6 className="text16-18 font-medium">{heading}</h6>
    <p>{descrption}</p>
  </div>
};