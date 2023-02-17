import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import cn from 'classnames';
import { Button } from './Button';
import { customersAPI } from '../../api';

export type PhoneFormType = {
  type: 'audit' | 'individualWidget' | 'freeDemonstration' | 'freeAccessToTheSystem' | 'tryWidget'
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
        let resp = await customersAPI.add({ ...values, ...additionData, type });
        if (resp) {
          setSubmitting(false);
          resetForm();
        }

        onSuccess && onSuccess(resp);
      }}
    >
      {({ errors, touched }) => {
        let isError = Object.keys(errors).length !== 0;

        return <Form className={cn('flex flex-col', className)}>
          {children}
          <label className='text14-18 text-[#656566]' htmlFor="phone">Ваш номер телефона</label>
          <Field
            className={cn(`
            text16-18 text-white bg-[rgba(14,_16,_20,_0.6)] px-4 py-5 mt-4 transition-all border
            md:max-w-[260px]
            placeholder:text-white
            focus:outline-0`,
              isError ? 'border-dark-red hover:border-red focus:border-red' : 'border-light-stroke hover:border-white focus:border-white',
            )}
            placeholder='+7 (___) ___-__-__'
            name="phone"
            type="phone"
          />
          {errors.phone && touched.phone && <p className='text-red mt-2.5'>{errors.phone}</p>}
          <div className='flex mt-5 max-md:flex-col md:gap-x-8 md:mt-7 md:items-center'>
            <Button className='w-full text-base md:max-w-[260px]'>{buttonSign}</Button>
            <p className='text-[12px] mt-2.5 md:mt-0 max-w-[22em]'>
              Нажимая «{buttonSign}», я даю согласие на
              <span className='underline ml-1 transition-colors hover:text-blue'>
                <a href='https://policies.google.com/terms?hl=ru' target='_blank' rel='noreferrer noopener'>обработку персональных данных</a>
              </span>
            </p>
          </div>
        </Form>
      }}
    </Formik>
  );
};