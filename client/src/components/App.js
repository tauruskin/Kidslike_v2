import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';
import { ModalTest } from './ModalTest';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<CustomLoader />}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
            <Route component={NotFound} />
          </Switch>
          <ModalTest />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
