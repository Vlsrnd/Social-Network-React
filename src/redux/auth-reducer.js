import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

//action creator
export const setAuthUserData = (id, email, login, isAuth) => {
  return {type: SET_USER_DATA, payload: {id, email, login, isAuth}};
};
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

//thunk
export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.amIAuthorized();
  if (data.resultCode === 0) {
    let {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) dispatch(getAuthUserData());
  else {
    if (data.resultCode === 10) dispatch(getCaptchaUrl());
    dispatch(stopSubmit('login', {_error: data.messages[0] || 'some error'}));
  }
};
export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(data.url));
};
export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false));
  else console.error(data.messages);
};


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

