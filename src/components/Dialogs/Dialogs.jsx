import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';



const Dialogs = (props) => {
  
  const newMessage = React.createRef();

  const sendMessage = () => {
    const text = newMessage.current.value;
    alert(text);
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
          <textarea ref={newMessage}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;