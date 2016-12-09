import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import User from './components/users'
import Home from './components/home'
import Artist from './components/artist'
import configureStore from './stores/configureStore'
import './index.css';


// CREATE THE STORE
export const store = configureStore({user_id: null, jwt: localStorage.jwt, logged_in: false})


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/home' component={User} />
        <Route path='/results' component={Artist} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
