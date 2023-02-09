import { IntegrationCategoryType } from "../Integration";
import { Item } from "./Item";
import './styles.scss';

type Props = {

} & IntegrationCategoryType

export const Category: React.FC<Props> = ({ category, items }) => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div>
    <h6 className="text14-22">{category}</h6>
    <div className="mt10-30 flex gap-2.5 max-sm:flex-wrap sm:flex-col md:gap-5">
      {Items}
    </div>
  </div>
};