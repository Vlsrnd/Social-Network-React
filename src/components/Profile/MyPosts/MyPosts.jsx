import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        {postsElements}
      </div>
      
    </div> 
  )
}

export default MyPosts;