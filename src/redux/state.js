import { rerenderEntireTree } from "../render";

export {state, addPost};

const state = {
  profilePage: {
    posts: [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
            {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
            {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
            {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
            {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
            {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}],

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
}

//Input === string
const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 2,
    imgLink: 'Donald_Duck.png',
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

//
state.addPost = addPost;

