import {createAction} from 'redux-actions';

export const colorStartCreate = createAction(
  "COLOR_START_CREATE"
)

export const colorCreateSuccess = createAction(
  "COLOR_CREATE_SUCCESS"
)

export const colorCreateFailure = createAction(
  "COLOR_CREATE_FAILURE"
)