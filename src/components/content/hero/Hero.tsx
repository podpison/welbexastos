import { Ball } from "../../ui/ball/Ball";
import { Glass } from "../../ui/glass/Glass";
import { Light } from "../../ui/Light";
import { Sphere } from "../../ui/Sphere";
import { Gifts } from "./Gifts";

export const Hero: React.FC = () => {
  return <section className="relative flex flex-col gap-y-4 md:flex-row">
    <Glass className='w-[120vw] h-[calc(100%_+_45px)] -left-4 -top-11 sm:w-[76%] md:w-[47%] lg:h-[calc(100%_+_100px)] lg:-top-24'>
      <span className="hidden bg-orange-to-red w-px h-[calc(100%_+_50px)] sm:block max-lg:max-h-[395px]" />
    </Glass>
    <Light className="bg-purple -right-52 top-1/2 -translate-y-1/2" size={260} />
    <Light className="bg-dark-red -left-1/4 bottom-1/4" size={210} />
    <Light className="bg-orange -left-1/4 -bottom-1/3 sm:left-1/2 -translate-x-1/2" size={200} opacity={40} />
    <Ball className="w-11 h-11 max-sm:bottom-[15%] max-sm:left-1 sm:right-[37%] sm:top-[16%] md:right-auto md:left-[32%]" color="red" />
    <div className="lg:w-[22em]">
      <h2>
        Зарабатывайте больше
        <br />
        <span className="font-black orange-to-red-text"> с AmoCRM.</span>
      </h2>
      <p className="text18 montserrat max-w-[14em] mt-4 sm:mt-6 md:mt-8">Развиваем и контролируем продажи за вас</p>
    </div>
    <Sphere className='-z-20 absolute max-sm:w-[80%] max-md:max-w-[240px] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:mt-[160px] sm:-right-[2%] sm:-top-[130px] md:top-0 md:right-auto md:mx-auto md:w-full md:h-full md:object-contain lg:relative lg:min-w-[300px] lg:h-[300px]' containerClassName='md:w-full md:mr-2.5 lg:mr-0' />
    <Gifts />
  </section>
};