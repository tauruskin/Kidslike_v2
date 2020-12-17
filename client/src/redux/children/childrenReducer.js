import { createReducer } from '@reduxjs/toolkit';
import {
  createChildrenSuccess,
  changeChildrenMarkSuccess,
  getAllChildrenSuccess,
  deleteChildrenSuccess,
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
  
  [deleteChildrenSuccess]: (state, { payload }) =>
    state.filter(el => el._id !== payload),  
});
export default children;
