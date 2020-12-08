import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';
import Header from './Header/Header'
import Logo from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';
const privatePage = true

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header>
          <Logo />
          {privatePage && <Navigation />}
          {privatePage && <UserInfo />}
        </Header>
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
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
