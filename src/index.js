import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorMessage from './ErrorMsg.js';
import './index.css';

window.gm_authFailure = () => {
    ReactDOM.render(<ErrorMessage/>, document.getElementById('root'));
  }

  //This line renders a React element <App> into a root DOM node
ReactDOM.render(<App />, document.getElementById('root'));

// To make the app to work offline and load faster, we can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
