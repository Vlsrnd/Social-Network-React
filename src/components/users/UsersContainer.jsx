import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC} from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: totalUsersCount => dispatch(setUsersTotalCountAC(totalUsersCount)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);