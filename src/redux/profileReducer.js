export {addPostActionCreator, updateNewPostTextActionCreator, profileReducer};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const addPostActionCreator = () => ({ type: ADD_POST });
const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 2,
        imgLink: '1Donald_Duck.png',
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}