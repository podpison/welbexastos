import cn from 'classnames';
import { WeSolveProblemsCurrentSectionType } from './WeSolveProblems';

type Props = {
  onClick: (number: WeSolveProblemsCurrentSectionType) => void
  name: string
  id: WeSolveProblemsCurrentSectionType
  currentSection: WeSolveProblemsCurrentSectionType
}

export const SectionName: React.FC<Props> = ({ name, currentSection, id, onClick }) => {
  return <h6
    className={cn(
      "we-solve-problems__section-name text14-18 font-medium transition-all max-md:text-center max-md:p-4",
      currentSection === id && 'we-solve-problems__section-name-active'
    )}
    onClick={() => onClick(id)}
  >
    {name}
  </h6>
};