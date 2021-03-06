import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'social-network-react/src/redux/profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'social-network-react/src/redux/profile-reducer/SET-USER-PROFILE';
const SET_STATUS = 'social-network-react/src/redux/profile-reducer/SET-STATUS';
const DELETE_POST = 'social-network-react/src/redux/profile-reducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'social-network-react/src/redux/profile-reducer/SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [{id: 1, message: 'Hi', likesCount: 11},
          {id: 2, message: 'How is your it-kamasutra?', likesCount: 52},
          {id: 3, message: 'How are you', likesCount: 6}],
  profile: null,
  status: '',
};

//action creators
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
//thunk
export const getUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch(err) {
    console.log(err);
  }
};
export const updateUserStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) dispatch(setStatus(status));
  else console.error(data.messages);
};
export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
};
export const saveProfileData = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfileData(profile);
  if (response.data.resultCode === 0) dispatch(getUserProfile(userId));
  // else dispatch(stopSubmit('edit-profile', {'contacts':{'facebook': response.data.messages[0]}}));
  else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile,
          photos: action.photos}
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    default:
      return state;
  }
}