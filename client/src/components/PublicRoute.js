import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  family,
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <>
      <Route
        {...routeProps}
        render={props =>
          isAuthenticated ? <Redirect to="/home" /> : <Component {...props} family={family} />
        }
      />
    </>
  );

export default PublicRoute;
