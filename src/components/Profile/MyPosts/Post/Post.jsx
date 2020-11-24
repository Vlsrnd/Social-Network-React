import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (      
    <div className={s.item}>
      <img src="./ava001.png" alt="avatar"></img>
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;