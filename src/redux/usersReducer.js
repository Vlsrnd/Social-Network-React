const FOLLOW = 'FOLLOW';;
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

//followActionCreator, unfollowActionCreator
const followAC = (userId) => ({type: FOLLOW, userId});
const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
const setUsersAC = (users) => ({type: SET_USERS, users});


let initialState = {
  users: [
          // {id: 1, name: 'Dmitry', surname: 'Karapet', photoUrl: '/ava/ava.jpg', 
          //   location: {country: 'Belarus', city: 'Minsk'}, status: `I'm looking for a Job right now...`, 
          //   followed: true},
          // {id: 2, name: 'Svetlana', surname: 'Dubina', photoUrl: '/ava/ava.jpg', 
          //   location: {country: 'Belarus', city: 'Minsk'}, status: `I'm so pretty`, 
          //   followed: true},
          // {id: 3, name: 'Sergey', surname: 'Sinvil', photoUrl: '/ava/ava.jpg', 
          //   location: {country: 'Ukraine', city: 'Kiev'}, status: `Yupeeee`, 
          //   followed: false},
          // {id: 4, name: 'Andrew', surname: 'Tishkin', photoUrl: '/ava/ava.jpg', 
          //   location: {country: 'Russia', city: 'Moscow'}, status: `mad`, 
          //   followed: false},
          ]
};

const usersReducer = (state = initialState, action) => {
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
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}

export {followAC, unfollowAC, setUsersAC, usersReducer};
