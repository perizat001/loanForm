import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormDataType, FormProps } from '../utils/consts';
import { step3Schema } from '../formScheme';
import { ToastContainer, toast } from 'react-toastify';
import classes from './styles.module.scss';
import axios from 'axios';
import ProgressBar from './ProgressBar';

const Step3 = ({ formData, setFormData }: FormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(step3Schema),
  });

  const onFormSubmit = async (data: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      toast('Заявка успешно отправлена!');
    } catch (error) {
      toast('При отправке возникла ошибка, попробуйте позже');
    }
  };

  return (
    <div className={classes.container}>
      <ToastContainer />
      <ProgressBar />
      <h1 className={classes.title}>Финансовая информация</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className={classes.form}>
        <div className={classes.inputWrap}>
          <label className={classes.label}>Ежемесячный доход</label>
          <input
            type="number"
            {...register('monthlyIncome')}
            placeholder="Ежемесячный доход"
            className={classes.input}
          />
          <p className={classes.error}>{errors.monthlyIncome?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Сумма кредита</label>
          <div className={classes.sliderWrap}>
            <span className={classes.loanSumText}>{`${formData.loanSum} ₸`}</span>
            <input
              type="range"
              {...register('loanSum')}
              placeholder="Сумма кредита"
              className={classes.loanSumSlider}
              min={20000}
              max={1000000}
              step={1000}
              onChange={(e) => setFormData({ ...formData, loanSum: Number(e.target.value) })}
            />
          </div>
          <p className={classes.error}>{errors.loanSum?.message}</p>
        </div>

        <div className={classes.inputWrap}>
          <label className={classes.label}>Срок кредита</label>
          <input
            type="number"
            {...register('loanTerm')}
            placeholder="Срок кредита"
            className={classes.input}
          />
          <p className={classes.error}>{errors.loanTerm?.message}</p>
        </div>

        <div className={classes.buttonsWrap}>
          <button type="button" className={classes.back} onClick={() => navigate('/step2')}>
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

export default Step3;
