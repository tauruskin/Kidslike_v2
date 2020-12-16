import { createReducer } from '@reduxjs/toolkit';
import actions from './userActions';

const userInfo = createReducer('', {
  [actions.getUserInfoRequest]: (state, { payload }) => payload,
});

export default userInfo;
