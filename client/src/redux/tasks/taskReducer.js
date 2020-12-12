import { createReducer } from '@reduxjs/toolkit';
import { createTask, updateTask, deleteTask } from './taskActions';

const userHabitsState = [];

const userTasks = createReducer(userHabitsState, {
  [createTask]: (state, { payload }) => [
    ...state,

    {
      name: payload.name,
      childId: payload.childId,
      points: payload.points,
      days: payload.days,
    },
  ],
  [updateTask]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
});
export default userTasks;
