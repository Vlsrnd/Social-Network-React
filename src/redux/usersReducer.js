import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 26,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

//action creators
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});
//

//thunks
export const getRequestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getRequestUsers(page, pageSize)
  dispatch(setCurrentPage(page));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator ) => {
    dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId)
  if (data.resultCode === 0) dispatch(actionCreator);
  else console.error(data.messages);
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), followSuccess(userId));
};
export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(usersAPI), unfollowSuccess(userId));
};
//


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      };
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_USERS_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS: 
      return {...state, 
        followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)}
    default:
      return state;
  }
}

