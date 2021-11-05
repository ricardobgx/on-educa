/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import NavBar from './components/App/NavBar';
import routes from './routes';

const Routes = (): JSX.Element => {
  const token = window.localStorage.getItem('token') || '';

  const isAuthenticated = (): boolean => {
    if (token) return true;
    return false;
  };

  return (
    <BrowserRouter>
      {isAuthenticated() ? <NavBar /> : null}
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => {
              if (isAuthenticated() && route.path === '/')
                return <Redirect to="/home" />;
              if (!isAuthenticated() && route.path !== '/')
                return <Redirect to="/" />;
              return <route.component {...props} {...route.props} />;
            }}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
