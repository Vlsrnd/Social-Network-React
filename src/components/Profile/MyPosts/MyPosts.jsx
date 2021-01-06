import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  // const onAddPost = () => props.addPost();

  // const onPostChange = (event) => {
  //   let text = event.target.value;
  //   props.updateNewPostText(text);
  // }

  const AddPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'new message'} name={'newMessage'} component={'textarea'}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  };

  const AddPostReduxForm = reduxForm({form: 'addNewPost'})(AddPostForm);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (      
    <div className={styles.postsBlock}>
      <h3>There is my posts</h3>
      <AddPostReduxForm onSubmit={onSubmit} />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div> 
  )
}

export default MyPosts;