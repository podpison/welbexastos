import { ThankfulLetterItemType } from "./ThankfulLetters";

type Props = {
  items: ThankfulLetterItemType[]
  activeItemId: number
  setFullLetterId: React.Dispatch<React.SetStateAction<number | null>>
}

export const ItemContent: React.FC<Props> = ({ activeItemId, items, setFullLetterId }) => {
  let currentItem = items.find(i => i.id === activeItemId);

  const setFullLetter = () => {
    setFullLetterId(currentItem?.id === undefined ? null : currentItem.id);
  };

  return <div className="max-md:mt-5 md:row-[1]">
    <div>
      <p className="text24 font-medium">
        Компания
        <span className="orange-to-red-text"> {currentItem?.companyName}</span>
      </p>
      <small className="text14-18 text-dark-gray mt-1.5 sm:mt-2.5">{currentItem?.owner}</small>
    </div>
    <div className="mt10-30">
      <p className="line-clamp-[7]">«{currentItem?.letter}»</p>
      <button className="flex items-center gap-1.5 text-base text-blue font-medium mt-5 sm:mt-7 md:mt-9 lg:mt-10" onClick={setFullLetter}>
        Читать письмо целиком
        <svg
          className="transition-all group-hover:fill-white"
          width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 5L15.7929 11.2929C16.1834 11.6834 16.1834 12.3166 15.7929 12.7071L9.5 19" stroke="#4077F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>
    </div>
  </div>
};