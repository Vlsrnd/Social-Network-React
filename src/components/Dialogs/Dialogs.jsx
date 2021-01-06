import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  const onSendMessage = () => {
    props.sendMessage();

  }

  const onMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
  }
  
  const dialogsElements = props.dialogs.map( user => <DialogItem name={user.name} key={user.id} id={user.id} ava={user.ava} />);
  const messagesElements = props.messages.map(msg => <Message message={msg.message} key={msg.id} />);
  
  const SendNewMessage = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'new message'} name={'newMessage'} component={'textarea'}  />
        </div>
        <div>
          <button>Send message</button>
        </div>
      </form>
    )
  };

  const SendNewReduxMessage = reduxForm({ form: 'newMessage' })(SendNewMessage);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        {messagesElements}
      </div>

      <SendNewReduxMessage onSubmit={onSubmit} />
      {/* <div className={styles.submitForm}>
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText} 
                    placeholder='some text'></textarea>
        </div>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div> */}
    </div>
  )
}

export default Dialogs;