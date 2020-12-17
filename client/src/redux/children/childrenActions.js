import { createAction } from '@reduxjs/toolkit';

export const createChildrenRequest = createAction(
  'children/createChildrenRequest',
);
export const createChildrenSuccess = createAction('children/createChildren');
export const createChildrenError = createAction('children/createChildrenError');

export const changeChildrenMarkRequest = createAction(
  'children/changeChildrenMarkRequest',
);
export const changeChildrenMarkSuccess = createAction(
  'children/changeChildrenMark',
);
export const changeChildrenMarkError = createAction(
  'children/changeChildrenMarkError',
);

export const getAllChildrenRequest = createAction(
  'children/getAllChildrenRequest',
);
export const getAllChildrenSuccess = createAction('children/getAllChildren');
export const getAllChildrenError = createAction('children/getAllChildrenError');

export const deleteChildrenRequest = createAction(
  'children/deleteChildrenRequest',
);
export const deleteChildrenSuccess = createAction(
  'children/deleteChildrenSuccess',
);
export const deleteChildrenError = createAction(
  'children/deleteChildrenError',
);