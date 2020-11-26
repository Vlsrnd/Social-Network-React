import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let dialogs =  [{id: 1, name: 'Dimych'}, 
                      {id: 2, name: 'Andrew'},
                      {id: 3, name: 'Sveta'},
                      {id: 4, name: 'Sasha'},
                      {id: 5, name: 'Viktor'},
                      {id: 6, name: 'Valera'}];
  let messages =  [{id: 1, message: 'Hi'}, 
                      {id: 2, message: 'How is your it-kamasutra?'},
                      {id: 3, message: 'Yo'},
                      {id: 4, message: 'How are you'},
                      {id: 5, message: 'Hey, long time no see'},
                      {id: 6, message: 'How have you been?'},
                      {id: 7, message: 'Testing message'}];
                      
  let messagesElements = messages.map(msg => <Message message={msg.message} />);
  let dialogsElements = dialogs.map( user => <DialogItem name={user.name} id={user.id} />);


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