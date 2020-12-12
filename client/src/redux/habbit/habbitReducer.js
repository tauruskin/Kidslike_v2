import { createReducer } from '@reduxjs/toolkit';
import { createHabbit, deleteHabbit, updateHabbit } from './habbitActions';

const userHabitsState = [];

const userHabits = createReducer(userHabitsState, {
  [createHabbit]: (state, { payload }) => [
    ...state,

    {
      name: payload.name,
      childId: payload.childId,
      points: payload.points,
    },
  ],
  [updateHabbit]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
});
export default userHabits;
