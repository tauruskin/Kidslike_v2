import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import GiftsView from './GiftsView';
import ChildTaskPage from '../components/ChildTaskPage/ChildTaskPage';
import HabitsList from '../components/HabitsList/HabitsList';
import TaskList from '../components/TaskList/TaskList';
import Container from '../components/Container/Container';
import authOperations from '../redux/auth/authOperations';
import authSelector from '../redux/auth/authSelectors';
import habbitOperations from '../redux/habbit/habbitOperations';

class HomeView extends Component {

  componentDidMount() {
    // console.log(this.props.token);
    // authOperations.setToken(this.props.token);
    this.props.getAllHabits( ['5fd16a4cf5208f36bc9ca42b']);
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <LeftSideBar family={this.props.family} />
        <Container>
          <Route path={`${match.path}`} exact>
            <HabitsList />
            <TaskList />
          </Route>
          <Route path={`${match.path}/gifts`} component={GiftsView} />
          <Route path={`${match.path}/child`}>
            <ChildTaskPage />
          </Route>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  // token: authSelector.isAuthenticated(state),
});

const mapDispatchToProps = { getAllHabits: habbitOperations.getAllHabits,}

export default connect(mapStateToProps, mapDispatchToProps
  // {
  // onLogOut: authOperations.logOut,
  // getAllHabits: habbitOperations.getAllHabits,
// }
)(HomeView);
