import {createAction} from 'redux-actions';

export const productStartCreate = createAction(
  "PRODUCT_START_CREATE"
)

export const productCreateSuccess = createAction(
  "PRODUCT_CREATE_SUCCESS"
)

export const productCreateFailure = createAction(
  "PRODUCT_CREATE_FAILURE"
)