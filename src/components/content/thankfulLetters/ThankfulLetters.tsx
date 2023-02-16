import { Logos } from './logos/Logos';
import { useState } from 'react';
import { ItemContent } from './ItemContent';
import { FullScreenGlass } from '../../ui/FullScreenGlass';
import { FullLetterModal } from './FullLetterModal';
import { useResize } from './../../../hooks/useResize';
import { Light } from './../../ui/Light';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectThankfulLetterItems } from '../../../redux/selectors';

export const ThankfulLetters: React.FC = () => {
  useStaticItems('thankfulLetters');
  let items = useSelector(selectThankfulLetterItems);
  let windowWidth = useResize();
  const [activeItemId, setActiveItemId] = useState(0);
  const [fullLetterId, setFullLetterId] = useState<number | null>(null);

  let isMobile = windowWidth < 640;

  return <section
    className="mt80-160 relative py-5 md:py-8 lg:py-12"
    id='letters'
  >
    <Light className='bg-dark-red -left-12 -top-12' size={200} />
    <Light className='bg-purple -right-8 -top-12' size={200} />
    <FullLetterModal items={items} fullLetterId={fullLetterId} setFullLetterId={setFullLetterId}  />
    <div className='absolute w-[200vw] -left-[100vw] h-full top-0 -z-10' style={{ background: 'linear-gradient(152.66deg, rgba(255, 246, 233, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }} />
    <FullScreenGlass />
    <h2>{isMobile ? 'Благодарность клиентов' : 'Благодарственные письма'}</h2>
    <div className='mt-7 sm:mt-10 md:mt-12 md:grid md:grid-cols-1 md:gap-x-10 lg:mt-[70px] lg:grid-cols-[minmax(30%,_1fr)_minmax(640px,_1fr)]'>
      <Logos items={items} activeItemId={activeItemId} setActiveItemId={setActiveItemId} />
      <ItemContent items={items} activeItemId={activeItemId} setFullLetterId={setFullLetterId} />
    </div>
  </section>
};