import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  const addPost = () => props.store.dispatch(addPostActionCreator());
  const onPostChange = (text) => props.store.dispatch(updateNewPostTextActionCreator(text));
  const state = props.store.getState();

  return (<MyPosts updateNewPostText={onPostChange} 
                  addPost={addPost}
                  posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;