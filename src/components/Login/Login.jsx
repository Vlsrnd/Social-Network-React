import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators';
import { FormControl } from '../common/FormsControls/FormsControls';

const Input = FormControl('input');
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} 
          validate={[required]}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} type='password' component={Input}
          validate={[required]}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, true);
  };

  if (props.isAuth) return <Redirect to='/profile' />
  
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, { login })(Login);