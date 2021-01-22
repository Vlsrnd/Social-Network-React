import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

export const FormControl = (element) => ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
      <div>
        {React.createElement(element, {...input, ...props})}
      </div>
      { hasError && <span>{error}</span> }
    </div>
  )
};
export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
  return (
    <div>
      <Field placeholder={placeholder} name={name}  
        validate={validators} component={component} 
          {...props}
        /> {text}
    </div>
  )
};