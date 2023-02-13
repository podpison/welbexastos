import { HashLink } from "../HashLink";
import { FooterAnotherPageItemType, FooterBlockType, FooterHashLinkItemType } from "./Footer";

type Props = {

} & FooterBlockType

const anotherWebsiteTypeGuard = (item: FooterAnotherPageItemType | FooterHashLinkItemType | JSX.Element): item is FooterAnotherPageItemType => {
  return (item as FooterAnotherPageItemType).isAnotherWebsite !== undefined;
};

const footerHashLinkGuardian = (item: FooterAnotherPageItemType | FooterHashLinkItemType | JSX.Element): item is FooterHashLinkItemType => {
  return (item as FooterHashLinkItemType).name !== undefined;
};

export const Block: React.FC<Props> = ({ heading, items }) => {
  let Items = items.map((i, index) => {
    if (anotherWebsiteTypeGuard(i)) {
      return <a href={i.to} target='_blank' rel='noreferrer noopener' key={index}>{i.name}</a>
    };

    if (footerHashLinkGuardian(i)) {
      return <HashLink {...i} />
    } else {
      return i;
    };
  });

  return <div>
    <h6 className="text12-14 uppercase">{heading}</h6>
    <div className="flex flex-col gap-y-2.5 mt-5">
      {Items}
    </div>
  </div>
};