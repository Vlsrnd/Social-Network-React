import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  // debugger;
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Route  path="/profile" render={() => <Profile store={props.store} />} />
          <Route  path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </div>
      </div>
  );
}

export default App;
