import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

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
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>

      <div className={s.submitForm}>
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