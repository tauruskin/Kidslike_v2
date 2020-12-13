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
    this.props.getAllHabits({children: ['5fd49e403e33eb3eda2f2af5']});
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

export default connect(mapStateToProps, {
  // onLogOut: authOperations.logOut,
  getAllHabits: habbitOperations.getAllHabits,
})(HomeView);
