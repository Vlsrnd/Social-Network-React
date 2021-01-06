import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
          {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
          {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
          {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
          {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
          {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}],
  profile: null,
  status: '',
};

//action creators
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
//thunk
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  })
};
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  })
};
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) dispatch(setStatus(status));
    else console.error(data.messages);
  })
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      const newPost = {
        id: 50530561,
        message: action.newPostBody,
        likesCount: 2,
        imgLink: '1Donald_Duck.png',
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}