import React from 'react';
import loader from '../../assets/images/loader.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
  return (
  <div className={styles.preloader}>
    <img src={loader} alt='load' width='100px' height='100px'></img>
  </div>
  )
};

export default Preloader;