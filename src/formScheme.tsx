import * as Yup from 'yup';

export const step1Schema = Yup.object({
  firstName: Yup.string().required('Введите имя'),
  surname: Yup.string().required('Введите фамилию'),
  birth: Yup.string().required('Введите дату рождения'),
  phoneNumber: Yup.string()
    .matches(/^\+77\d{9}$/, 'Номер должен быть в формате +77XXXXXXXXX')
    .required('Введите номер телефона'),
  email: Yup.string().email('Некорректный email').required('Введите электронную почту'),
});

export const step2Schema = Yup.object({
  country: Yup.string().required('Выберите страну'),
  city: Yup.string().required('Выберите страну'),
  address: Yup.string().required('Укажите адрес'),
  postIndex: Yup.number()
    .typeError('Почтовый индекс должен быть числом')
    .required('Введите почтовый индекс')
    .integer('Почтовый индекс должен быть целым числом')
    .min(10000, 'Минимум 5 цифр')
    .max(9999999999, 'Максимум 10 цифр'),
});

export const step3Schema = Yup.object({
  monthlyIncome: Yup.number()
    .required('Укажите ежемесячный доход')
    .min(0, 'Доход должен быть больше 0')
    .moreThan(0, 'Доход должен быть больше 0'),
  loanSum: Yup.number()
    .typeError('Введите сумму кредита')
    .required('Укажите сумму кредита')
    .min(20000, 'Минимальная сумма — 20 000 ₸')
    .max(1000000, 'Максимальная сумма — 1 000 000 ₸')
    .moreThan(0, 'Cумма кредита должна быть больше 0'),
  loanTerm: Yup.number().required('Укажите срок кредита'),
});
