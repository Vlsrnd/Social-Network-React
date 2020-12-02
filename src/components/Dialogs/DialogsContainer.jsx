import React from 'react';
import s from './Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  
  const onSendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return  (<Dialogs sendMessage={onSendMessage} 
                    updateNewMessageText={onMessageChange}
                    state={props.store.getState().dialogsPage} />)
}

export default DialogsContainer;