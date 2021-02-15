import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (      
    <div className={styles.item}>
      <span>{props.message}</span>
      <div>Like ({props.likesCount})</div>
    </div>
  )
}

export default Post;