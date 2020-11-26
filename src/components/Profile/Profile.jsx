import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = () => {
  let posts =  [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
                {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
                {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
                {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
                {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
                {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}];
  
  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  return (      
    <div>
      <ProfileInfo />
      <MyPosts postsElements={postsElements}/>
    </div>
  )
}

export default Profile;