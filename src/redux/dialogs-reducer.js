const ADD_MESSAGE = 'social-network-react/src/redux/dialogs-reducer/ADD-MESSAGE';

export const sendMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: 
      const text = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 100, message: text}]
      }
    default:
      return state;
  }
}