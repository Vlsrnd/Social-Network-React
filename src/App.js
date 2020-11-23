import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="someimg" alt="logo"></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Setting</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="som" alt="big picture"></img>
        </div>
        <div>
          <img srs="sfdf" alt="avatar"></img>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New Post
          </div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
