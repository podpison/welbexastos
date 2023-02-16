import { ElementWithPhoneForm } from "../ui/ElementWithPhoneForm";

export const FreeAudit: React.FC = () => {
  return <ElementWithPhoneForm
    heading="Бесплатный аудит"
    orangeText="Закажите /бесплатный скайп-аудит отдела продаж/"
    orangeTextClassName="max-w-[12em] flex flex-col"
    additionText="И получите предложение по решению вашей задачи."
    additionTextClassName="max-w-[14em]"
    buttonSign="Заказать аудит"
    type="audit"
    id='freeAudit'
  />
};