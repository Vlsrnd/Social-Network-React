import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, FormControl } from '../../common/FormsControls/FormsControls';
import styles from '../../common/FormsControls/FormsControls.module.css'

const Input = FormControl('input');
const TextArea = FormControl('textarea');

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>save</button></div>
    {
    error &&
    <div className={styles.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
    </div>
    <div>
      <b>My professional skills:</b> {createField('My skills', 'lookingForAJobDescription', [], TextArea)}
    </div>
    <div>
      <b>About me:</b> {createField('About me', 'aboutMe', [], TextArea)}
    </div>
    <div>
      <b>Contacts:</b> {Object.entries(profile.contacts)
        .map(contact => {
        return (
          <div key={contact[0]}>
            <b>{contact[0]}:</b>{createField(contact[0], 'contacts.' + contact[0], [], Input)}
          </div>
        )
        })}
    </div>
  </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
