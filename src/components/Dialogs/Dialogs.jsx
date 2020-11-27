import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';



const Dialogs = (props) => {
  const messagesElements = props.state.messages.map(msg => <Message message={msg.message} />);
  const dialogsElements = props.state.dialogs.map( user => <DialogItem name={user.name} id={user.id} ava={user.ava} />);
  
  return (      
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;