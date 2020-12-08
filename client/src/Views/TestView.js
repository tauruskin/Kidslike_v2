import React, { Component } from 'react';
import { ModalTest } from '../components/ModalTest';
import HabitsList from '../components/HabitsList/HabitsList';

class TestView extends Component {
  render() {
    return (
      <>
        <h2 style={{ paddingTop: '200px' }}>Test Page</h2>
        <p>You can test your component</p>
        <HabitsList />
        <ModalTest />
      </>
    );
  }
}

export default TestView;
