import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  
  const sendMessage = () => {
    props.sendMessage();
  }

  const onMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
  }
  
  const dialogsElements = props.state.dialogs.map( user => <DialogItem name={user.name} id={user.id} ava={user.ava} />);
  const messagesElements = props.state.messages.map(msg => <Message message={msg.message} />);
  


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
          <textarea onChange={onMessageChange} value={props.state.newMessageText} 
                    placeholder='some text'></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;