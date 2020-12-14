import { createReducer } from '@reduxjs/toolkit';
import actions from './taskActions';

const userHabitsState = [];

const userTasks = createReducer(userHabitsState, {
  [actions.createTaskSuccess]: (state, { payload }) => [
    ...state,
    payload
  ],
  [actions.updateTaskSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
  [actions.deleteTaskSuccess]: (state, { payload }) => { state.filter(el => el._id !== payload) },
  [actions.getAllTasksSuccess]: (_, { payload }) => {
    return payload;
  }
});


export default userTasks;
