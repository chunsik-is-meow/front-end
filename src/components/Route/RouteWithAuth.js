import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const RouteWithAuth = ({component: Component, ...rest}) => {
  // const isValidToken = AuthService.isValidToken();
  const isValidToken = true;
  return (
    <Route {...rest} render={(props) =>
      isValidToken ?
        <Component {...rest} {...props} />
        :
        <Redirect to='/auth/login'/>

    }
    />
  );
};

export default RouteWithAuth;