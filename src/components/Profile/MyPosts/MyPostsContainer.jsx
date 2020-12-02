import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {StoreContext} from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
          <StoreContext.Consumer>
          {
            store => {
              const addPost = () => store.dispatch(addPostActionCreator());
              const onPostChange = (text) => store.dispatch(updateNewPostTextActionCreator(text));
              const state = store.getState();
              return (
                    <MyPosts  updateNewPostText={onPostChange} 
                              addPost={addPost}
                              posts={state.profilePage.posts}
                              newPostText={state.profilePage.newPostText} />
              )
            }
          }
          </StoreContext.Consumer>
  )
}

export default MyPostsContainer;