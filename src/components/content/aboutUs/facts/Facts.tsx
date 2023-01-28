import { Item } from "./Item";

const facts = [
  {
    heading: '30',
    description: 'сотрудников в компании'
  },
  {
    heading: '+350',
    description: 'внедрений АмоCRM'
  },
  {
    heading: '11',
    description: 'лет в програмировании и автоматизации'
  },
]

export type AbousUsFactType = typeof facts[0]

export const Facts: React.FC = () => {
  let Items = facts.map((f, index) => <Item {...f} key={index} />);
  
  return <div className="flex flex-wrap justify-between gap-4 mt-5 sm:mt-7 md:mt-10 lg:mt-12">
    {Items}
  </div>
};