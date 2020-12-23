const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessage = () => ({ type: 'ADD-MESSAGE' });
export const updateNewMessageText = text => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })

const initialState = {
  messages: [{id: 1, message: 'Hi, hey'}, 
             {id: 2, message: 'How is your it-kamasutra?'},
             {id: 3, message: 'Yo'},
             {id: 4, message: 'How are you'},
             {id: 5, message: 'Hey, long time no see'},
             {id: 6, message: 'How have you been?'},
             {id: 7, message: 'Testing message'}],
  dialogs: [{id: 1, name: 'Dimych', ava: '1mario.png'}, 
            {id: 2, name: 'Andrew', ava: '1mario.png'},
            {id: 3, name: 'Sveta', ava: '1mario.png'},
            {id: 4, name: 'Sasha', ava: '1mario.png'},
            {id: 5, name: 'Viktor', ava: '1mario.png'},
            {id: 6, name: 'Valera', ava: '1mario.png'}],
  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: 
      const text = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 100, message: text}]
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
}