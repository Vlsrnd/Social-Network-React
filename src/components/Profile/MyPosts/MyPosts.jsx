import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (      
    <div>
      There is my posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        <Post message="Hi, how are you?" like-count="5"/>
        <Post message="It's my first post" like-count="3"/>
      </div>
      
    </div> 
  )
}

export default MyPosts;