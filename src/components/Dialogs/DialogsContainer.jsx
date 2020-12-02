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

  const state = props.store.getState().dialogsPage;
  return <Dialogs sendMessage={onSendMessage} 
                  updateNewMessageText={onMessageChange}
                  dialogs={state.dialogs}
                  messages={state.messages}
                  newMessageText={state.newMessageText} />
}

export default DialogsContainer;