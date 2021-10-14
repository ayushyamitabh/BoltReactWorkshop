import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StatefulApp from './Components/StatefulApp';
import StatelessApp from './Components/StatelessApp';
import './index.css'
import StatefulParent from './Props/StatefulParent';
import StatefulParentTwo from './Props/StatefulParentTwo';
import App from './TheGram/App';
import { getData } from './TheGram/data';
import Feed from './TheGram/Feed';
import Image from './TheGram/Image';
import NavBar from './TheGram/NavBar';
import Post from './TheGram/Post';
import Profile from './TheGram/Profile';
import UserDetail from './TheGram/UserDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="router">
        <div className="nav">
          <Link to="/">Blank</Link>

          <h6>React | Component Types</h6>
          <Link to="/stateless">Stateless</Link>
          <Link to="/stateful">Stateful</Link>

          <h6>React | Props</h6>
          <Link to="/props">Parent &amp; Child</Link>
          <Link to="/props2">Parent &amp; Child 2</Link>

          <h6>The Gram | Components</h6>
          <Link to="/image">Image</Link>
          <Link to="/userDetail">User Detail</Link>
          <Link to="/post">Post</Link>
          <Link to="/navBar">Nav Bar</Link>

          <h6>The Gram | Pages</h6>
          <Link to="/feed">Feed</Link>
          <Link to="/profile">Profile</Link>

          <h6>The Gram | App</h6>
          <Link to="/theGram">App</Link>

          <h6>External Links</h6>
          <a
            rel="noreferrer"
            href="https://github.com/ayushyamitabh/BoltReactWorkshop"
            target="_blank"
          >
            GitHub | Source Code
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ayushyamitabh/"
            target="_blank"
          >
            LinkedIn | Ayushya Amitabh
          </a>
        </div>
        <div className="page">
          <Switch>
            <Route path="/stateless" component={StatelessApp} />
            <Route path="/stateful" component={StatefulApp} />
            <Route path="/props" component={StatefulParent} />
            <Route path="/props2" component={StatefulParentTwo} />
            <Route path="/image" render={() => (
              <div className="image-path">
                <Image color="#d3fcff" isLiked />
                <Image color="#d3ffd3" />
              </div>
            )} />
            <Route path="/userDetail" render={() => (
              <div>
                <UserDetail size="small" userName="username" lowerHalf={<p>This is my caption</p>}/>
                <UserDetail size="large" userName="other_username" />
                <UserDetail size="large" userName="ayushyamitabh" lowerHalf={
                  <div>
                    <strong>37</strong>&nbsp;posts&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>170</strong>&nbsp;followers&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>130</strong>&nbsp;following
                  </div>
                } />
              </div>
            )} />
            <Route path="/navBar" render={() => (
              <div>
                <NavBar />
              </div>
            )} />
            <Route path="/post" render={() => (
              <div>
                <Post userName="ayushya" caption="super funny caption goes here" color="green" />
              </div>
            )} />
            <Route path="/feed" render={() => (
              <div>
                <Feed posts={getData().feed} />
              </div>
            )} />
            <Route path="/profile" render={() => (
              <div>
                <Profile data={getData()} />
              </div>
            )} />
            <Route path="/theGram/:subPath?" component={App} />
            <Route path="/" exact render={() => (
              <div className="blank">
                EXAMPLES WILL SHOW HERE
              </div>
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
