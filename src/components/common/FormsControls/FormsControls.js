import React from 'react';
import styles from './FormsControls.module.css';

export const FormControl = (element) => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
      <div>
        {React.createElement(element, {...input, ...props})}
      </div>
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}