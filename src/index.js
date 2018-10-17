import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MissingInfoContainer from './components/containers/MissingInfoContainer'
import DatabaseContainer from './components/containers/DatabaseContainer'

ReactDOM.render((
  <Router>
    <>
      <Route exact path="/home" component={App} />
      <Route exact path="/info" component={MissingInfoContainer} />
      <Route exact path="/data" component={DatabaseContainer} />
    </>
  </Router>),
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
