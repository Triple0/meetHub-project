import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/signupIndex';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
//this is for router , to go from one page to another..
export const history=createBrowserHistory();

ReactDOM.render(
  <Provider store={store()} >
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
