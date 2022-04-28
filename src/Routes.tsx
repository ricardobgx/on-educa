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

import routes from './static/routes';

const Routes = (): JSX.Element => {
  const id = window.localStorage.getItem('id');

  const isAuthenticated = (): boolean => !!id;

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
              if (isAuthenticated() && !route.private)
                return <Redirect to="/" />;
              if (!isAuthenticated() && route.private)
                return <Redirect to="/sign" />;
              return <route.component {...props} {...route.props} />;
            }}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
