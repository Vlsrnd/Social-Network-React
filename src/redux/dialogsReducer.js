export {addMessageActionCreator, updateNewMessageTextActionCreator, dialogsReducer};

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
const updateNewMessageTextActionCreator = text => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 1,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}
