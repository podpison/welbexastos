import { AboutUs } from './components/content/aboutUs/AboutUs';
import { Acquaintance } from './components/content/Acquaintance';
import { Hero } from './components/content/hero/Hero';
import { WeSolveProblems } from './components/content/weSolveProblems/WeSolveProblems';
import { Header } from './components/ui/header/Header';
import { ActionsAfterAudit } from './components/content/actionsAfterAudit/ActionsAfterAudit';
import { FreeAudit } from './components/content/FreeAudit';
import { CostCalculation } from './components/content/costCalculation/CostCalculation';
import { Services } from './components/content/services/Services';
import { Widgets } from './components/content/widgets/Widgets';
import { IndividualWidget } from './components/content/IndividualWidget';
import { ArrowUp } from './components/ui/ArrowUp';
import { Integration } from './components/content/integration/Integration';
import { OurClients } from './components/content/ourClients/OurClients';
import { FreeDemonstration } from './components/content/FreeDemonstration';
import { QandA } from './components/content/QandA/QandA';
import { SolveCases } from './components/content/solveCases/SolveCases';
import { ThankfulLetters } from './components/content/thankfulLetters/ThankfulLetters';
import { FreeAccessToTheSystem } from './components/content/freeAccessToTheSystem/FreeAccessToTheSystem';
import { Footer } from './components/ui/footer/Footer';

function App() {
  return <div className="relative container flex flex-col px-3.5 pt-5 max-w-[1168px]">
    <ArrowUp />
    <Header />
    <main className='flex-1 mt-[120px] sm:mt-[78px] md:mt-[110px] lg:mt-32'>
      <Hero />
      <Acquaintance />
      <AboutUs />
      <WeSolveProblems />
      <ActionsAfterAudit />
      <FreeAudit />
      <CostCalculation />
      <Services />
      <Widgets />
      <IndividualWidget />
      <Integration />
      <OurClients />
      <FreeDemonstration />
      <SolveCases />
      <ThankfulLetters />
      <QandA />
      <FreeAccessToTheSystem />
    </main>
    <Footer />
  </div>
}

export default App
