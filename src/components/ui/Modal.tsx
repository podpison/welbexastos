import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isActive: boolean
  setIsActive: () => void
  children: React.ReactNode
  className?: string
}

export const Modal: React.FC<Props> = ({ isActive, setIsActive, children, className }) => {
  return <AnimatePresence>
    {isActive &&
      <motion.div
        className="fixed top-0 left-0 z-50 h-screen w-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/80" onClick={setIsActive} />
        <div className={cn("relative flex flex-col z-40 w-[92%] h-fit max-h-[80vh] bg-[#15171c] py-4 px-2 sm:py-6 sm:max-h-[70vh] sm:px-4 md:px-8 md:py-6", className)}>
          <svg className='group absolute cursor-pointer right-0 -top-10 sm:-right-6' //icon by icons8
            onClick={setIsActive}
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            width="24" height="24"
            viewBox="0,0,256,256"
          >
            <g className='transition-all group-hover:fill-[#9a9a9a]' fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
          </svg>
          {children}
        </div>
      </motion.div>
    }
  </AnimatePresence>
};