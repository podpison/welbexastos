import { IntegrationItemItemType } from "../../../../redux/reducers/static";

type Props = {

} & IntegrationItemItemType

export const Item: React.FC<Props> = ({ logo, websiteLink }) => {
  return <a className='relative group w-fit' href={websiteLink}>
    <img className="absolute left-0 transition-opacity group-hover:opacity-0" src={logo.gray} alt='logo-gray' />
    <img className="opacity-0 transition-opacity group-hover:opacity-100" src={logo.default} alt='logo' />
  </a>
};