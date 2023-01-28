import { Light } from "../../ui/Light";
import { Facts } from "./facts/Facts";

export const AboutUs: React.FC = () => {
  return <section className="relative mt-20 sm:mt-24 md:mt-32 lg:mt-36">
    <Light className="bg-dark-red max-sm:-right-[40%] sm:-left-[10%]" size={250} />
    <h2>О нас</h2>
    <p className="text24 font-bold max-w-[18em] mt-10 sm:mt-12 md:mt-14 lg:mt-[70px]">
      <span className="orange-to-red-text">WelbeX — крупный интегратор AmoCRM </span>
      в Росcии и ещё 8 странах</p>
    <Facts />
  </section>
};