import habitActions from '../habbit/habbitActions';
import childrenActions from '../children/childrenActions';
import authActions from '../auth/authActions';
import giftActions from '../gifts/giftActions';
import taskActions from '../tasks/taskActions';
import { createReducer } from '@reduxjs/toolkit';

export const loaderReducer = createReducer(false, {
  [habitActions.getAllHabitsRequest]: () => true,
  [habitActions.getAllHabitsSuccess]: () => false,
  [habitActions.getAllHabitsError]: () => false,
  [habitActions.checkHabbitRequest]: () => true,
  [habitActions.checkHabbitSuccess]: () => false,
  [habitActions.checkHabbitError]: () => false,
  [habitActions.deleteHabbitRequest]: () => true,
  [habitActions.deleteHabbitSuccess]: () => false,
  [habitActions.deleteHabbitError]: () => false,
  [habitActions.updateHabbitRequest]: () => false,
  [habitActions.updateHabbitSuccess]: () => false,
  [habitActions.updateHabbitError]: () => false,

  
  [authActions.signinRequest]: () => true,
  [authActions.signinSuccess]: () => false,
  [authActions.signinError]: () => false,
  [authActions.signupRequest]: () => true,
  [authActions.signupSuccess]: () => false,
  [authActions.signupError]: () => false,
  [authActions.signoutRequest]: () => true,
  [authActions.signoutSuccess]: () => false,
  [authActions.signoutError]: () => false,


  [childrenActions.getAllChildrenRequest]: () => true,
  [childrenActions.getAllChildrenSuccess]: () => false,
  [childrenActions.getAllChildrenError]: () => false,
  [changeChildren.changeChildrenMarkRequest]: () => true,
  [changeChildren.changeChildrenMarkSuccess]: () => false,
  [changeChildren.changeChildrenMarkError]: () => false,
  [changeChildren.createChildrenRequest]: () => true,
  [changeChildren.createChildrenSuccess]: () => false,
  [changeChildren.createChildrenError]: () => false,


  [giftActions.getAllGiftsRequest]: () => true,
  [giftActions.getAllGiftsSuccess]: () => false,
  [giftActions.getAllGiftsError]: () => false,
  [giftActions.createGiftRequest]: () => true,
  [giftActions.createGiftSuccess]: () => false,
  [giftActions.createGiftError]: () => false,
  [giftActions.deleteGiftRequest]: () => true,
  [giftActions.deleteGiftSuccess]: () => false,
  [giftActions.deleteGiftError]: () => false,
  [giftActions.updateGiftRequest]: () => true,
  [giftActions.updateGiftSuccess]: () => false,
  [giftActions.updateGiftError]: () => false,


  [taskActions.getAllTasksRequest]: () => true,
  [taskActions.getAllTasksSuccess]: () => false,
  [taskActions.getAllTasksError]: () => false,
  [taskActions.createTaskRequest]: () => true,
  [taskActions.createTaskSuccess]: () => false,
  [taskActions.createTaskError]: () => false,  
  [taskActions.updateTaskRequest]: () => true,
  [taskActions.updateTaskSuccess]: () => false,
  [taskActions.updateTaskError]: () => false,
  [taskActions.deleteTaskRequest]: () => true,
  [taskActions.deleteTaskSuccess]: () => false,
  [taskActions.deleteTaskError]: () => false,
});
