import { Ball } from "../../ui/ball/Ball";
import { Glass } from "../../ui/glass/Glass";
import { Light } from "../../ui/Light";
import { Sphere } from "../../ui/Sphere";
import { Gifts } from "./Gifts";

export const Hero: React.FC = () => {
  return <section className="relative flex flex-col gap-y-4 md:flex-row">
    <Glass className='w-[120vw] h-[200%] -left-4 -top-full sm:w-[76%] md:w-[47%] lg:h-[calc(100%_+_100px)] lg:-top-24'>
      <span className="hidden bg-orange-to-red w-px h-[calc(100%_+_50px)] sm:block max-lg:max-h-[395px]" />
    </Glass>
    <Light className="bg-purple -right-52 top-1/2 -translate-y-1/2" size={260} />
    <Light className="bg-dark-red -left-1/4 bottom-1/4" size={210} />
    <Light className="bg-orange -left-1/4 -bottom-1/3 sm:left-1/2 -translate-x-1/2" size={200} opacity={40} />
    <Ball className="w-11 h-11 max-sm:bottom-[15%] max-sm:left-1 sm:right-[37%] sm:top-[16%] md:right-auto md:left-[24%] md:top-[20%]" color="red" />
    <div className="lg:w-[22em]">
      <h2>
        Зарабатывайте больше
        <br />
        <span className="font-black orange-to-red-text"> с AmoCRM.</span>
      </h2>
      <p className="text18 montserrat max-w-[14em] mt-4 sm:mt-6 md:mt-8">Развиваем и контролируем продажи за вас</p>
    </div>
    <Sphere className='-bottom-[25%] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[80%] sm:top-[15%] sm:right-[1%] md:relative md:max-w-none md:my-auto md:mr-4' />
    <Gifts />
  </section>
};