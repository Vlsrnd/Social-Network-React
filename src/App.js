import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Route  path="/profile" 
                  render={() => <Profile profilePage={props.state.profilePage} 
                                         dispatch={props.dispatch} />} />
          <Route  path="/dialogs" 
                  render={() => <Dialogs state={props.state.dialogsPage} 
                                         dispatch={props.dispatch} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </div>
      </div>
  );
}

export default App;
