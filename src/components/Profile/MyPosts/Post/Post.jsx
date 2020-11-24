import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (      
    <div className={s.item}>
      <img src="./ava001.png" alt="avatar"></img>
      {props.message}
      <div>
        <span>Like ({props.likesCount})</span>
      </div>
    </div>
  )
}

export default Post;