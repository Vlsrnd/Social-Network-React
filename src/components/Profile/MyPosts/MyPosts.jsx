import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        {props.postsElements}
      </div>
      
    </div> 
  )
}

export default MyPosts;