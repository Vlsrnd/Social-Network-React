import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (      
    <div className={styles.item}>
      <img src={window.location.origin + '/image/' + props.imgLink} alt="avatar"></img>
      <span>{props.message}</span>
      <div className={styles.like}>Like ({props.likesCount})</div>
    </div>
  )
}

export default Post;