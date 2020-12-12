import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authActions';

const tokenReducer = createReducer(null, {
  // [actions.registrationSuccess]: (_, action) => action.payload.token,
  [actions.signinSuccess]: (_, actions) => {
    return actions.payload.access_token;
  },
  [actions.signoutSuccess]: (_, __) => null,
});

export default combineReducers({
  token: tokenReducer,
});
