import React, { Component, Fragment } from 'react';
import HabitsList from '../HabitsList/HabitsList';
import TaskList from '../TaskList/TaskList';


export default class ChildTaskPage extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <HabitsList />
        <TaskList/>
       
      </div>
    );
  }
}