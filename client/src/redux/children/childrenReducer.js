import { createReducer } from '@reduxjs/toolkit';
import { createChildren } from './childrenActions';

const children = createReducer([], {
  [createChildren]: (state, { payload }) => [
    ...state,
    {
      name: payload.name,
      gender: payload.gender,
      points: payload.points,
    },
  ],
});
export default children;
