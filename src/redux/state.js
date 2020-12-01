export const store = {
  _state: {
    profilePage: {
      posts: [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
              {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
              {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
              {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
              {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
              {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    news: {},
    music: {},
    setting: {},
    sidebar: {
      friends: [
        {ava: 'mario.png', name: 'Mario'},
        {ava: 'Donald_Duck.png', name: 'Donald'},
        {ava: 'sonic.png', name: 'Sonic'},
      ],
    },
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // action = {type: 'ADD-POST', newText: 'some text'}
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 2,
        imgLink: 'Donald_Duck.png',
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      const newMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else {
      return console.error(`Error: undefined method. Callback function isn't founded into dispatch`), false;
    }
  },
};

window.store = store;

