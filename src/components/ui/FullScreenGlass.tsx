import { Glass } from './glass/Glass';

export const FullScreenGlass: React.FC = () => {
  return <Glass className="w-[200vw] h-full -left-[100vw] top-0">
    <span className="block w-full h-px bg-pink" />
    <span className="block w-full h-px absolute bottom-[1px] bg-pink" />
  </Glass>
};