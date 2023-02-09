import { AboutUs } from './components/content/aboutUs/AboutUs';
import { Acquaintance } from './components/content/acquaintance/Acquaintance';
import { Hero } from './components/content/hero/Hero';
import { WeSolveProblems } from './components/content/weSolveProblems/WeSolveProblems';
import { Header } from './components/ui/header/Header';
import { ActionsAfterAudit } from './components/content/actionsAfterAudit/ActionsAfterAudit';
import { FreeAudit } from './components/content/FreeAudit';
import { CostCalculation } from './components/content/costCalculation/CostCalculation';
import { Services } from './components/content/services/Services';
import { Widgets } from './components/content/widgets/Widgets';
import { IndividualWidget } from './components/content/individualWidget/IndividualWidget';
import { ArrowUp } from './components/ui/ArrowUp';
import { Integration } from './components/content/integration/Integration';
import { OurClients } from './components/content/ourClients/OurClients';

function App() {
  return <div className="relative container flex flex-col px-3.5 pt-5 max-w-[1168px] min-h-[3000vh]">
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
    </main>
  </div>
}

export default App
