import { Actions } from "./actions/Actions";

export const ActionsAfterAudit: React.FC = () => {
  return <section className="mt40-70">
    <h3 className='text24 font-medium'>
      После
      <span className='orange-to-red-text'> бесплатного аудита </span>
      мы
    </h3>
    <Actions />
  </section>
};