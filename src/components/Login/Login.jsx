import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators';
import { createField, FormControl } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css';

const Input = FormControl('input');
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
      { captchaUrl && <img src={captchaUrl} alt='captcha' /> }
      { captchaUrl && createField('Captcha symbols', 'captcha', [required], Input) }
      {
      error &&
      <div className={styles.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) return <Redirect to='/profile' />
  
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
};

const mapStateToProps = (state) => ({captchaUrl: state.auth.captchaUrl, isAuth: state.auth.isAuth});

export default connect(mapStateToProps, { login })(Login);