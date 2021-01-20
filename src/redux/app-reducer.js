import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

//action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
// thunk
export const initializeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()));
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
};

