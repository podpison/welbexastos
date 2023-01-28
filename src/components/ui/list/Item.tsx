type Props = {
  name: string
}

export const Item: React.FC<Props> = ({ name }) => {
  return <li>
    <p className="montserrat text14-16 grid grid-cols-[10px_1fr] gap-x-1.5">
      <span className="bg-orange-to-red block w-2.5 h-px mt-2.5" />
      {name}
    </p>
  </li>
};