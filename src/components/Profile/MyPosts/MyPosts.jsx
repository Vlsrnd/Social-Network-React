import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  const onAddPost = () => props.addPost();

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  }

  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div> 
  )
}

export default MyPosts;