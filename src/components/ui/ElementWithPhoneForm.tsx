import { PhoneForm, PhoneFormType } from "./PhoneForm";
import { Light } from './Light';
import { Ball } from './ball/Ball';

type Props = {
  heading: string
  orangeText: string //orange text must be inside // like that /text/
  additionText: string 
} & PhoneFormType

export const ElementWithPhoneForm: React.FC<Props> = ({ additionText, heading, orangeText, buttonSign, type }) => {
  let orangeTextSplit = orangeText.substring(orangeText.indexOf("/") + 1, orangeText.lastIndexOf("/"));
  let otherText = orangeText.split('/').filter(i => i != orangeTextSplit && i !== '').join(' ');

  return <section className="relative mt80-160 pt-5 sm:mt-7 md:mt-9 lg:pt-12">
    <h2>{heading}</h2>
    <div className="grid relative mt40-70 sm:grid-cols-[max-content_1fr] sm:gap-[10%] lg:gap-[19%]">
      <Light className="bg-dark-red -right-[20%] sm:right-0" size={200} />
      <Light className="bg-purple -bottom-[20%] -left-[20%] sm:left-0" size={150} />
      <Ball className="w-12 h-12 right-[10%] top-[12%] sm:w-14 sm:h-14 md:h-16 md:w-16 lg:h-18 lg:w-18 lg:w-20 lg:h-20" color="red" />
      <Ball className="w-10 h-10 top-[33%] -left-[30px]" color="purple" />
      <div>
        <p className="text24 font-medium flex flex-col sm:max-w-[12em]">
          {otherText}
          <span className="orange-to-red-text ml-1">{orangeTextSplit}</span>
        </p>
        <p className="montserrat mt10-20 text14-18 sm:max-w-[14em]">{additionText}</p>
      </div>
      <PhoneForm className='max-sm:mt-5' buttonSign={buttonSign} type={type} />
    </div>
  </section>
};