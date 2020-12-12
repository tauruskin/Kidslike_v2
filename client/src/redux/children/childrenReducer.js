import { createReducer } from '@reduxjs/toolkit';
import { createChildren, changeChildrenMark } from './childrenActions';

const children = createReducer([], {
  [createChildren]: (state, { payload }) => [
    ...state,
    {
      name: payload.name,
      gender: payload.gender,
      points: payload.points,
    },
  ],
  [changeChildrenMark]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
});
export default children;
