import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'To pole musi zawierać co najmniej dwie litery')
    .max(50, 'To pole może zawierać maksymalnie 50 znaków')
    .required('Uzupełnij pole "Imię"'),
  email: Yup.string().email('Nieprawidłowy adres email').required('Uzupełnij pole "Adres mailowy"'),
  message: Yup.string()
    .max(250, 'To pole może zawierać maksymalnie 250 znaków')
    .required('Uzupełnij pole "Wiadomość"'),
});

export default contactSchema;
