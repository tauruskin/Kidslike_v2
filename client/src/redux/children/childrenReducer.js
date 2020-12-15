import { createReducer } from '@reduxjs/toolkit';
import {
  createChildrenSuccess,
  changeChildrenMarkSuccess,
  getAllChildrenSuccess,
} from './childrenActions';

const children = createReducer([], {
  [getAllChildrenSuccess]: (_, { payload }) => {
    return payload;
  },

  [createChildrenSuccess]: (state, { payload }) => [
    ...state,
    {
      ...payload,
    },
  ],
  [changeChildrenMarkSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
});
export default children;
