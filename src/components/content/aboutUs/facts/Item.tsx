import { AbousUsFactType } from "./Facts";

type Props = {
  
} & AbousUsFactType

export const Item: React.FC<Props> = ({ description, heading }) => {
  return <div className="max-w-[8em] last:max-w-[14em] max-sm:last:col-[1/3]">
    <h4 className="orange-to-red-text text36-48 font-bold">{heading}</h4>
    <p className="text14-18 mt-1.5">{description}</p>
  </div>
};