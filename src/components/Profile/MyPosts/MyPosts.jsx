import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { FormControl } from '../../common/FormsControls/FormsControls';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength30 = maxLengthCreator(30);
const Textarea = FormControl('textarea');

const MyPosts = React.memo((props) => {
  const postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      key={p.id}
      likesCount={p.likesCount}
      imgLink={p.imgLink}
    />
  ));
  const AddNewPostForm = (props) => {
    return (
      <form className={styles.addPostForm} onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            placeholder="new post"
            validate={[required, maxLength30]}
            name="newPostBody"
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    );
  };
  const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
    AddNewPostForm
  );

  const onAddPost = (formData) => {
    const { newPostBody } = formData;
    props.addPost(newPostBody);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts:</h3>
      {postsElements}
      <AddNewPostFormRedux onSubmit={onAddPost} />
    </div>
  );
});

export default MyPosts;
