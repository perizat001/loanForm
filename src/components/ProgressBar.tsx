import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './styles.module.scss';

const ProgressBar = () => {
  const location = useLocation();
  return (
    <div className={classes.progressBarWrap}>
      <span className={classes.activeStep}>1</span>
      <div className={classes.activeLine}></div>
      <span className={location.pathname === '/step1' ? classes.step : classes.activeStep}>2</span>
      <div className={location.pathname !== '/step1' ? classes.activeLine : classes.line}></div>
      <span className={location.pathname === '/step3' ? classes.activeStep : classes.step}>3</span>
    </div>
  );
};

export default ProgressBar;
