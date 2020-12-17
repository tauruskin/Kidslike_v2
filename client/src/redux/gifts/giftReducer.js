import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './giftActions';

const userGiftsInitialState = [];

const userGifts = createReducer(userGiftsInitialState, {
  [actions.getAllGiftsSuccess]: (_, { payload }) => {
    return payload;
  },

  [actions.createGiftSuccess]: (state, { payload }) => [...state, payload],

  [actions.updateGiftSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),

  [actions.deleteGiftSuccess]: (state, { payload }) => {
    const gifts = state.filter(el => el._id !== payload);
    return [...gifts];
  },
  // [actions.updateGiftError]: (state, _) => state,
  // [actions.createGiftError]: (state, _) => state,
  // [actions.getAllGiftsError]: (state, _) => state,
  // [actions.deleteGiftError]: (state, { payload }) => {
  //   const gifts = state.filter(el => el._id !== payload);
  //   return [...gifts];
  // },
});

const loaderGifts = createReducer(false, {
  [actions.createGiftRequest]: () => true,
  [actions.createGiftSuccess]: () => false,
  [actions.createGiftError]: () => false,
  [actions.updateGiftRequest]: () => true,
  [actions.updateGiftSuccess]: () => false,
  [actions.updateGiftError]: () => false,
  [actions.deleteGiftRequest]: () => true,
  [actions.deleteGiftsSuccess]: () => false,
  [actions.deleteGiftsError]: () => false,
  [actions.getAllGiftsRequest]: () => true,
  [actions.getAllGiftsSuccess]: () => false,
  [actions.getAllGiftsError]: () => false,
});

const errorGifts = createReducer(false, {
  [actions.createGiftRequest]: () => false,
  [actions.createGiftSuccess]: () => false,
  [actions.createGiftError]: (_, { payload }) => payload,
  [actions.updateGiftRequest]: () => false,
  [actions.updateGiftSuccess]: () => false,
  [actions.updateGiftError]: (_, { payload }) => payload,
  [actions.deleteGiftRequest]: () => false,
  [actions.deleteGiftsSuccess]: () => false,
  [actions.deleteGiftsError]: (_, { payload }) => payload,
  [actions.getAllGiftsRequest]: () => false,
  [actions.getAllGiftsSuccess]: () => false,
  [actions.getAllGiftsError]: (_, { payload }) => payload,
});

export default combineReducers({ userGifts, loaderGifts, errorGifts });
