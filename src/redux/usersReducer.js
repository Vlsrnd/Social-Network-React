import { followAPI, usersAPI } from "../api/api";

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
export const getRequestUsers = (page, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getRequestUsers(page, pageSize).then(data => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  })
};
export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  followAPI.follow(userId).then(data => {
    if (data.resultCode === 0) dispatch(followSuccess(userId));
    else console.error(data.messages);
    dispatch(toggleFollowingProgress(false, userId));
  })
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  followAPI.unfollow(userId).then(data => {
    if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
    else console.error(data.messages)
    dispatch(toggleFollowingProgress(false, userId));
  })
};
//


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) return {...user, followed: true};
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) return {...user, followed: false};
          return user;
        })
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

