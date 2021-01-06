import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map( user => <DialogItem name={user.name} key={user.id} id={user.id} ava={user.ava} />);
  const messagesElements = props.messages.map(msg => <Message message={msg.message} key={msg.id} />);
  
  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder='new message' name='newMessageBody' component='textarea'  />
        </div>
        <div>
          <button>Send message</button>
        </div>
      </form>
    )
  };

  const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

  const addNewMessage = (formData) => {
    const {newMessageBody} = formData;
    props.sendMessage(newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs;