import * as Yup from 'yup';

const Validation = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Two characters minimum')
    .max(20, 'Twenty characters maximum')
    .required('This field is required!'),
  valueToFizz: Yup
    .number()
    .required('This field is required!'),
});

export default Validation;
