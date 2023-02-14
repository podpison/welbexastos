import { HashLink } from "../HashLink";
import { FooterAnotherPageItemType, FooterBlockType, FooterHashLinkItemType } from "./Footer";
import cn from 'classnames';

const anotherWebsiteTypeGuard = (item: FooterAnotherPageItemType | FooterHashLinkItemType | JSX.Element): item is FooterAnotherPageItemType => {
  return (item as FooterAnotherPageItemType).isAnotherWebsite !== undefined;
};

const footerHashLinkGuardian = (item: FooterAnotherPageItemType | FooterHashLinkItemType | JSX.Element): item is FooterHashLinkItemType => {
  return (item as FooterHashLinkItemType).name !== undefined;
};

type Props = {

} & FooterBlockType


export const Block: React.FC<Props> = ({ heading, items, className, itemsClassName }) => {
  let Items = items.map((i, index) => {
    let classNames = 'w-fit transition-colors hover:text-blue';

    if (anotherWebsiteTypeGuard(i)) {
      return <a className={classNames} href={i.to} target='_blank' rel='noreferrer noopener' key={index}>{i.name}</a>
    };

    if (footerHashLinkGuardian(i)) {
      return <HashLink className={classNames} {...i} />
    } else {
      return i;
    };
  });

  return <div className={cn('', className)}>
    <h6 className="text12-14 uppercase text-dark-gray font-bold">{heading}</h6>
    <div className={cn("grid gap-y-2.5 mt-5", itemsClassName)}>
      {Items}
    </div>
  </div>
};