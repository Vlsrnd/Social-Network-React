import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={'textarea'} placeholder={'new message'} name={'newPostBody'} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  };
  const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

  const onAddPost = (formData) => {
    const {newPostBody} = formData;
    props.addPost(newPostBody);
  };

  return (      
    <div className={styles.postsBlock}>
      <h3>There is my posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div> 
  )
}

export default MyPosts;