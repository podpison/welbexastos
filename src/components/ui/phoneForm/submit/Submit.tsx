import { Button } from "../../Button";
import { useState } from 'react';
import { PrivacyPolicy } from "./privacyPolicy/PrivacyPolicy";

type Props = {
  buttonSign: string
}

//PP - privacy policy
export const Submit: React.FC<Props> = ({ buttonSign }) => {
  const [isPPOpen, setIsPPOpen] = useState(false);
  const handlePPModalStatus = () => setIsPPOpen(prev => !prev);

  return <div className='flex mt-5 max-md:flex-col md:gap-x-8 md:mt-7 md:items-center'>
    <PrivacyPolicy isActive={isPPOpen} setIsActive={handlePPModalStatus} />
    <Button className='w-full text-base md:max-w-[260px]'>{buttonSign}</Button>
    <p className='text-[12px] mt-2.5 md:mt-0 max-w-[22em]'>
      Нажимая «{buttonSign}», я даю согласие на
      <span className='underline ml-1 transition-colors cursor-pointer hover:text-blue' onClick={handlePPModalStatus}>
        обработку персональных данных
      </span>
    </p>
  </div>
};