import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/Preloader/preloader';
import { store } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  componentDidMount = () => this.props.initializeApp();

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route  path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route  path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={withSuspense(Music)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={withSuspense(Settings)} />
          <Route path="/login" render={withSuspense(LoginPage)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
};
export default SocialNetworkApp;

