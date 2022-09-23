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

export const colorDeleteStart = createAction(
  "COLOR_DELETE_START"
)

export const colorDeleteSuccess = createAction(
  "COLOR_DELETE_SUCCESS"
)

export const colorDeleteFailure = createAction(
  "COLOR_DELETE_FAILURE"
)
export const colorUpdateStart = createAction(
  "COLOR_UPDATE_START"
)

export const colorUpdateSuccess = createAction(
  "COLOR_UPDATE_SUCCESS"
)

export const colorUpdateFailure = createAction(
  "COLOR_UPDATE_FAILURE"
)

export const getColorStart = createAction(
  "COLOR_GET_START"
)

export const getColorSuccess = createAction(
  "COLOR_GET_SUCCESS"
)

export const getColorFailure = createAction(
  "COLOR_GET_FAILURE"
)