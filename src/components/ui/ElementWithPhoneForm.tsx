import { PhoneForm, PhoneFormType } from "./PhoneForm";
import { Light } from './Light';
import { Ball } from './ball/Ball';
import cn from 'classnames';
import { FullScreenGlass } from "./FullScreenGlass";

type Props = {
  heading: string
  orangeText: string //orange text must be inside // like that /text/
  orangeTextClassName: string
  additionText: string | string[]
  additionTextClassName: string
  children?: React.ReactNode
  phoneFormChildren?: React.ReactNode
} & PhoneFormType

export const ElementWithPhoneForm: React.FC<Props> = ({ additionText, additionTextClassName, heading, orangeText, orangeTextClassName, buttonSign, type, children, phoneFormChildren }) => {
  let orangeTextSplit = orangeText.substring(orangeText.indexOf("/") + 1, orangeText.lastIndexOf("/"));
  let otherText = orangeText.split('/').filter(i => i != orangeTextSplit && i !== '').join(' ');

  let additionTextData = typeof additionText === 'string' ? [additionText] : additionText;
  let AdditionTexts = additionTextData.map((i, index) => <p className={cn("montserrat text14-18", additionTextClassName)} key={index}>{i}</p>);

  return <section className="relative mt80-160 py-5 md:py-8 lg:py-12">
    {children}
    <FullScreenGlass />
    <h2>{heading}</h2>
    <div className="grid relative mt40-70 sm:grid-cols-[max-content_1fr] sm:gap-[10%] lg:gap-[19%]">
      <Light className="bg-dark-red -right-[20%] sm:right-0" size={200} />
      <Light className="bg-purple -bottom-[20%] -left-[20%] sm:left-0" size={150} />
      <Ball className="w-12 h-12 right-[10%] top-[12%] sm:w-14 sm:h-14 md:h-16 md:w-16 lg:h-18 lg:w-18 lg:w-20 lg:h-20" color="red" />
      <Ball className="w-10 h-10 top-[33%] -left-[30px]" color="purple" />
      <div className="flex flex-wrap gap-y-2.5 gap-x-[10%] max-sm:items-center sm:flex-col sm:gap-y-4 md:gap-y-7">
        <p className={cn("text24 font-medium", orangeTextClassName)}>
          {orangeText.startsWith('/' + orangeTextSplit)
            ? <><span className="orange-to-red-text"> {orangeTextSplit}</span> {otherText}</>
            : <>{otherText} <span className="orange-to-red-text"> {orangeTextSplit}</span></>
          }
        </p>
        <div className="flex flex-col gap-y-2.5">
          {AdditionTexts}
        </div>
      </div>
      <PhoneForm className='max-sm:mt-5' buttonSign={buttonSign} type={type} children={phoneFormChildren} />
    </div>
  </section>
};