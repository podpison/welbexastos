import { useSelector } from "react-redux";
import { selectAboutUsItems } from "../../../../redux/selectors";
import { Item } from "./Item";

export const Facts: React.FC = () => {
  let items = useSelector(selectAboutUsItems);

  let Items = items.map((f, index) => <Item {...f} key={index} />);
  
  return <div className="flex flex-wrap justify-between gap-4 mt-5 sm:mt-7 md:mt-10 lg:mt-12">
    {Items}
  </div>
};