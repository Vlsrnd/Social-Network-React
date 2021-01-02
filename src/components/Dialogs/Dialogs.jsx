import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

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
  


  return (      
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        {messagesElements}
      </div>

      <div className={styles.submitForm}>
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText} 
                    placeholder='some text'></textarea>
        </div>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;