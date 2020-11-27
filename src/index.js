import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Message from './components/Dialogs/Message/Message';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Post from './components/Profile/MyPosts/Post/Post';

const data = {
  dialogs: {},
  profile: {},
  news: {},
  music: {},
  setting: {},
};
let dialogs =  [{id: 1, name: 'Dimych'}, 
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}];
let messages =   [{id: 1, message: 'Hi'}, 
                  {id: 2, message: 'How is your it-kamasutra?'},
                  {id: 3, message: 'Yo'},
                  {id: 4, message: 'How are you'},
                  {id: 5, message: 'Hey, long time no see'},
                  {id: 6, message: 'How have you been?'},
                  {id: 7, message: 'Testing message'}];

data.dialogs.messagesElements = messages.map(msg => <Message message={msg.message} />);
data.dialogs.dialogsElements = dialogs.map( user => <DialogItem name={user.name} id={user.id} />);


let posts =  [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
              {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
              {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
              {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
              {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
              {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}];
data.profile.postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} imgLink={p.imgLink}/>)

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
