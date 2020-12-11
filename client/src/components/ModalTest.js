import React, { useState, useEffect } from 'react';
import AddChildren from './modals/addChildren/AddChildren';
import AddHabbit from './modals/addHabbit/AddHabbit';
import AddTask from './modals/addTask/AddTask';
import ChangeHabbit from './modals/changeHabbit/ChangeHabbit';
import ChangeTask from './modals/changeTask/ChangeTask';

export const ModalTest = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const close = () => {
    setModalShow(prev => false);
  };

  const close2 = () => {
    setModalShow2(prev => false);
  };
  return (
    <>
      <button onClick={() => setModalShow(true)}>test modal</button>
      {modalShow && <AddHabbit close={close} />}
      <button onClick={() => setModalShow2(true)}>test modal</button>
      {modalShow2 && <ChangeHabbit close={close2} />}
    </>
  );
};
