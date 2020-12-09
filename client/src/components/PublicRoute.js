import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LeftSideBar from './LeftSideBar/LeftSideBar';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <>
      <LeftSideBar />
      <Route
        {...routeProps}
        render={props =>
          isAuthenticated ? <Redirect to="/home" /> : <Component {...props} />
        }
      /></>
  );

export default PublicRoute;
