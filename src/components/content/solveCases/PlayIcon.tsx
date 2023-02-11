import cn from 'classnames';

type Props = {
  isItemInCenter: boolean
}

export const PlayIcon: React.FC<Props> = ({ isItemInCenter }) => {
  return <div
    className={cn(
      'flex w-11 h-11 border border-white rounded-full transition-all shadow-none\
      group-hover:bg-blue group-hover:shadow-blue-shadow group-hover:border-blue\
      max-md:hidden',
      isItemInCenter && 'md:absolute md:top-10 md:right-7'
    )}
  >
    <span className='block w-0 h-0 border-transparent transition-colors border-l-white border-8 m-auto ml-[19px] group-hover:border-l-light-text' />
  </div>
};