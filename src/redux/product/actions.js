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
export const productUpdateStart = createAction(
  "PRODUCT_UPDATE_START"
)

export const productUpdateSuccess = createAction(
  "PRODUCT_UPDATE_SUCCESS"
)

export const productUpdateFailure = createAction(
  "PRODUCT_UPDATE_FAILURE"
)

export const productDeleteStart = createAction(
  "PRODUCT_DELETE_START"
)

export const productDeleteSuccess = createAction(
  "PRODUCT_DELETE_SUCCESS"
)

export const productDeleteFailure = createAction(
  "PRODUCT_DELETE_FAILURE"
)
export const getProductStart = createAction(
  "PRODUCT_GET_START"
)

export const getProductSuccess = createAction(
  "PRODUCT_GET_SUCCESS"
)

export const getProductFailure = createAction(
  "PRODUCT_GET_FAILURE"
)
