import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { FormDataType, FormProps } from '../utils/consts';
import { step2Schema } from '../formScheme';
import { useCountries } from '../hooks/useCountries';
import ProgressBar from './ProgressBar';
import classes from './styles.module.scss';

const Step2 = ({ formData, setFormData }: FormProps) => {
  const navigate = useNavigate();
  const countries = useCountries();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(step2Schema),
  });

  const onFormSubmit = (data: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    navigate('/step3');
  };

  return (
    <div className={classes.container}>
      <ProgressBar />
      <h1 className={classes.title}>Адресная информация</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className={classes.form}>
        <div className={classes.inputWrap}>
          <label className={classes.label}>Страна</label>
          <select
            {...register('country')}
            className={classes.input}
            value={formData.country}
            onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
          >
            <option value="">Выберите страну</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <p className={classes.error}>{errors.country?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Город</label>
          <input {...register('city')} placeholder="Город" className={classes.input} />
          <p className={classes.error}>{errors.city?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Адрес</label>
          <input {...register('address')} placeholder="Адрес" className={classes.input} />
          <p className={classes.error}>{errors.address?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Почтовый индекс</label>
          <input
            type="number"
            {...register('postIndex')}
            placeholder="Почтовый индекс"
            className={classes.input}
          />
          <p className={classes.error}>{errors.postIndex?.message}</p>
        </div>
        <div className={classes.buttonsWrap}>
          <button type="button" className={classes.back} onClick={() => navigate('/step1')}>
            Назад
          </button>
          <button type="submit" className={classes.button}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
