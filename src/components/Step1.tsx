import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { step1Schema } from '../utils/formScheme';
import classes from './styles.module.scss';
import { FormDataType, FormProps } from '../utils/consts';
import ProgressBar from './ProgressBar';

const Step1 = ({ formData, setFormData }: FormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(step1Schema),
  });

  const onFormSubmit = (data: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    navigate('/step2');
  };

  return (
    <div className={classes.container}>
      <ProgressBar />
      <h1 className={classes.title}>Персональная информация</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className={classes.form}>
        <div className={classes.inputWrap}>
          <label className={classes.label}>Имя</label>
          <input {...register('firstName')} placeholder="Имя" className={classes.input} />
          <p className={classes.error}>{errors.firstName?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Фамилия</label>
          <input {...register('surname')} placeholder="Фамилия" className={classes.input} />
          <p className={classes.error}>{errors.surname?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Дата рождения</label>
          <input
            {...register('birth')}
            placeholder="Дата рождения"
            type="date"
            className={classes.input}
          />
          <p className={classes.error}>{errors.birth?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Номер телефона</label>
          <input
            {...register('phoneNumber')}
            className={classes.input}
            placeholder="+7 ___ ___ __ __"
          />
          <p className={classes.error}>{errors.phoneNumber?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Электронная почта</label>
          <input {...register('email')} placeholder="Электронная почта" className={classes.input} />
          <p className={classes.error}>{errors.email?.message}</p>
        </div>

        <button type="submit" className={classes.button}>
          Далее
        </button>
      </form>
    </div>
  );
};

export default Step1;
