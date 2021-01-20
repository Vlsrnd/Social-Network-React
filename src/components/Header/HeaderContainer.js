import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  render = () => <Header {...this.props} />
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  userName: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
