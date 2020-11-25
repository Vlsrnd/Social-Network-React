import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (      
    <div className={s.item}>
      <img src={window.location.origin + '/image/' + props.imgLink} alt="avatar"></img>
      <span>{props.message}</span>
      <div className={s.like}>Like ({props.likesCount})</div>
    </div>
  )
}

export default Post;