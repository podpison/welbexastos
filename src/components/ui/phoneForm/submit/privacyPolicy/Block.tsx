import { PrivacyPolicyItemType } from "./PrivacyPolicy";

type Props = {

} & PrivacyPolicyItemType

export const Block: React.FC<Props> = ({ heading, description }) => {
  let linkInDesc = description.substring(description.indexOf("*") + 1, description.lastIndexOf("*"));
  let otherText = description.split(`*${linkInDesc}*`);

  return <div className="">
    <h5 className="text24 font-bold">{heading}</h5>
    <p className="mt-2.5">
      {description.includes('*')
        ? <>
          {otherText[0]}
          <a className="underline transition-colors hover:text-blue" href={linkInDesc} target='_blank' rel='noreferrer noopener'>{linkInDesc}</a>
          {otherText[1]}
        </>
        : description
      }
    </p>
  </div>
};