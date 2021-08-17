import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/styles/tailwind.css';

// layouts
import Admin from './layouts/Admin.js';
import Agency from './layouts/Agency.js';
import Auth from './layouts/Auth.js';
import User from './layouts/User.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/admin' component={Admin} />
      <Route path='/agency' component={Agency} />
      <Route path='/auth' component={Auth} />
      <Route path='/user' component={User} />
      <Route path='/' exact component={User} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
