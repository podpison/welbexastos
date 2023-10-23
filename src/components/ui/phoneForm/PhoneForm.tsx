import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import cn from 'classnames';
import { customersAPI } from '../../../api';
import { Submit } from './submit/Submit';
import { InputMask } from '@react-input/mask';

export type PhoneFormType = {
  type: 'audit' | 'individualWidget' | 'freeDemonstration' | 'freeAccessToTheSystem' | 'tryWidget' | 'tryServices'
  buttonSign: string
  additionData?: Object
  className?: string
  onSuccess?: (isSuccess: boolean) => void
  children?: React.ReactNode
}

const initialValues = {
  phone: '',
};
const validationSchema = Yup.object({
  phone: Yup.string().phone('ru', true, 'Введён некорректный номер телефона').required('Укажите номер телефона')
});

export const PhoneForm: React.FC<PhoneFormType> = ({ buttonSign, type, additionData = {}, className, onSuccess, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        try {
          let resp = await customersAPI.add({ ...values, ...additionData, type });
          if (resp) {
            resetForm();
          }
          
          onSuccess && onSuccess(resp);
        } catch (err) {
          console.error(err)
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, values, getFieldProps }) => {
        let isError = Object.keys(errors).length !== 0;
        console.log(values)

        return <Form className={cn('flex flex-col', className)}>
          {children}
          <label className='text14-18 text-[#656566]' htmlFor="phone">Ваш номер телефона</label>
          <InputMask
            className={cn(`
            text16-18 text-white bg-[rgba(14,_16,_20,_0.6)] px-4 py-5 mt-4 transition-all border
            md:max-w-[260px]
            placeholder:text-white
            focus:outline-0`,
              isError ? 'border-dark-red hover:border-red focus:border-red' : 'border-light-stroke hover:border-white focus:border-white',
            )}
            placeholder='+7 (___) ___-__-__'
            type="phone"
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            {...getFieldProps('phone')}
          />
          {errors.phone && touched.phone && <p className='text-red mt-2.5'>{errors.phone}</p>}
          <Submit buttonSign={buttonSign} />
        </Form>
      }}
    </Formik>
  );
};