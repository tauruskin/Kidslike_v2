import React, { useState, useEffect } from 'react';
import AddChildren from './modals/addChildren/AddChildren';
import AddHabbit from './modals/addHabbit/AddHabbit';
import AddPresent from './modals/addPresent/AddPresent';
import AddTask from './modals/addTask/AddTask';
import ChangeHabbit from './modals/changeHabbit/ChangeHabbit';
import ChangeTask from './modals/changeTask/ChangeTask';

export const ModalTest = () => {
  const [modalShow, setModalShow] = useState(false);

  const close = () => {
    setModalShow(prev => false);
  };

  return (
    <>
      <button onClick={() => setModalShow(true)}>test modal</button>
      {modalShow && <AddPresent close={close} />}
    </>
  );
};
