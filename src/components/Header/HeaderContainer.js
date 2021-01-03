import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import { checkAuthorize } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount = () => this.props.checkAuthorize();

  render = () => <Header {...this.props} />
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { checkAuthorize })(HeaderContainer);
