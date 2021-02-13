import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-network-react/src/redux/app-reducer/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

//action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
// thunk
export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData())
  dispatch(initializedSuccess());
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

