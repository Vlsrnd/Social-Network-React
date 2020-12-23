const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState = {
  posts: [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
          {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
          {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
          {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
          {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
          {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}],
  newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      const newPost = {
        id: 50530561,
        message: state.newPostText,
        likesCount: 2,
        imgLink: '1Donald_Duck.png',
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state;
  }
}