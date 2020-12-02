import React from 'react';
import s from './Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../storeContext';

const DialogsContainer = () => {
  return  (<StoreContext.Consumer>
          {
            store => {
              const onSendMessage = () => {
                store.dispatch(addMessageActionCreator());
              };
              const onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
              };
              return (
                <Dialogs sendMessage={onSendMessage} 
                          updateNewMessageText={onMessageChange}
                          state={store.getState().dialogsPage} />
              )}
          }
          </StoreContext.Consumer>)
}

export default DialogsContainer;