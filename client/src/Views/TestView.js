import React, { Component } from 'react';
import { ModalTest } from '../components/ModalTest';
import HabitsList from '../components/HabitsList/HabitsList';
import GiftCard from '../components/Gifts/GiftCard';

class TestView extends Component {
  render() {
    return (
      <>
        <h2 style={{ paddingTop: '200px' }}>Test Page</h2>
        <p>You can test your component</p>
        {/* <HabitsList /> */}
        <ModalTest />
        {/* <GiftCard/> */}
      </>
    );
  }
}

export default TestView;
