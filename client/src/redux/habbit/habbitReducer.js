import { createReducer } from '@reduxjs/toolkit';
import actions from './habbitActions';

const userHabitsInitialState = [];

const userHabits = createReducer(userHabitsInitialState, {
  [actions.getAllHabitsSuccess]: (_, { payload }) => {
    return payload;
  },

  [actions.createHabbitSuccess]: (state, { payload }) => [...state, payload],

  [actions.updateHabbitSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),

  [actions.checkHabbitSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),

  [actions.deleteHabbitSuccess]: (state, { payload }) =>
    state.filter(el => el._id !== payload),
});
export default userHabits;
