import React, { Component } from 'react';
import { ModalTest } from '../components/ModalTest';
import HabitsList from '../components/HabitsList/HabitsList';

class TestView extends Component {
  render() {
    return (
      <>
        <h2>Test Page</h2>
        <p>You can test your component</p>
        <ModalTest />
        <HabitsList />
      </>
    );
  }
}

export default TestView;
