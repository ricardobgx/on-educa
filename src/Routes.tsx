/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

import routes from './static/routes';
import { RootState } from './store';
import { isAuthenticated } from './utils/people';

const Routes: React.FC = () => {
  const { people } = useSelector((store: RootState) => store);

  const authenticationVariablesExists = (): boolean => {
    const id = localStorage.getItem('id') || '';

    return !!id;
  };

  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          render={(props: RouteComponentProps<any>) => {
            if (isAuthenticated(people) && !route.private)
              return <Redirect to="/" />;
            if (
              !authenticationVariablesExists() &&
              !isAuthenticated(people) &&
              route.private
            )
              return <Redirect to="/sign" />;
            return <route.component {...props} {...route.props} />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
