import { IconWithGrayBg } from "../../ui/iconWithGrayBg/IconWithGrayBg";
import { OurClientsItemType } from "./OurClients";

type Props = {
  
} & OurClientsItemType

export const Item: React.FC<Props> = ({ icon, name }) => {
  return <div>
    <IconWithGrayBg icon={icon} containerSize={60} iconSize={30} />
    <p className="text14-18">{name}</p>
  </div>
};