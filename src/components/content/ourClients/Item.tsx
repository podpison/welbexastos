import { IconWithGrayBg } from "../../ui/iconWithGrayBg/IconWithGrayBg";
import { OurClientsItemType } from "./OurClients";

type Props = {
  
} & OurClientsItemType

export const Item: React.FC<Props> = ({ icon, name }) => {
  return <div>
    <IconWithGrayBg icon={icon} rounded='rounded-full' containerSize='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]' iconSize='w-5 h-5 object-contain sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px]' />
    <p className="text14-18 mt-2.5">{name}</p>
  </div>
};