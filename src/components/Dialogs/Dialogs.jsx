import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`} acitveClassName="active">{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsData =  [{id: 1, name: 'Dimych'}, 
                      {id: 2, name: 'Andrew'},
                      {id: 3, name: 'Sveta'},
                      {id: 4, name: 'Sasha'},
                      {id: 5, name: 'Viktor'},
                      {id: 6, name: 'Valera'}];
  let messagesData =  [{id: 1, message: 'Hi'}, 
                      {id: 2, message: 'How is your it-kamasutra?'},
                      {id: 3, message: 'Yo'},
                      {id: 4, message: 'How are you'},
                      {id: 5, message: 'Hey, long time no see'},
                      {id: 6, message: 'How have you been?'}];

  return (      
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/* {dialogsData.reduce((res, cur) => res += `<DialogItem name='${cur.name}' id='${cur.id}' /> `, '')} */}
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <DialogItem name="Dimich" id="1" /> */}
        {/* <DialogItem name="Andrey" id="2"/> */}
        {/* <DialogItem name="Sveta" id="3"/> */}
        {/* <DialogItem name="Sasha" id="4"/> */}
        {/* <DialogItem name="Viktor" id="5"/> */}
        {/* <DialogItem name="Valera" id="6"/> */}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
      </div>
    </div>
  )
}

export default Dialogs;