import { ActionAfterAuditType } from "./Actions";

type Props = {

} & ActionAfterAuditType

export const Item: React.FC<Props> = ({ descrption, heading, img }) => {
  return <div className="flex flex-col gap-y-2.5 max-w-[290px] sm:last:mx-auto md:gap-y-5 lg:last:mx-0">
    <div className="actions-after-audit__icon-bg flex w-[70px] h-[70px] rounded-2xl">
      <img className="h-[35px] w-[35px] m-auto" src={img} alt='иконка' />
    </div>
    <h6 className="text16-18 font-medium">{heading}</h6>
    <p>{descrption}</p>
  </div>
};