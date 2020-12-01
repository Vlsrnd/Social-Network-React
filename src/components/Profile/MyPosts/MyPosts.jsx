import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div> 
  )
}

export default MyPosts;