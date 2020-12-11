import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';

import Header from './Header/Header';
import Logo from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';
import Layout from './Layout/Layout';
import ChildTaskPage from './ChildTaskPage/ChildTaskPage';
import HabitsList from './HabitsList/HabitsList';
/*
 *temporary variable for test.
 */
const privatePage = true;

class App extends Component {
  /*
  *temporary state for leftSideBar.
  */
  state = {
    family: true
  }
  /*
  *temporary method for leftSideBar.
  */
  familyRender = () => {
    this.setState({ family: !this.state.family })
  }

  render() {
    return (
      <BrowserRouter>
        <Header privatePage={privatePage}>
          <Logo privatePage={privatePage} />
          {privatePage && <Navigation familyRender={this.familyRender} />}
          {privatePage && <UserInfo />}
        </Header>
        <Layout>
          <Suspense fallback={<CustomLoader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                    <PublicRoute family={this.state.family} key={route.label} {...route} />
                  ),
              )}
              <Route component={NotFound} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
