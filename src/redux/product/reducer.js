import {handleActions} from 'redux-actions';

import {
  productCreateFailure,
  productCreateSuccess,
  productStartCreate
} from "./actions"


const initialState = {
  isProductCreatedStart: false,
  isProductCreatedSuccess: false,
  isProductCreatedFailure: false,
  data: [],
  errorMessage: '',
}


const reducer = handleActions({
    [productStartCreate]: (state) => ({
      ...state,
      isProductCreatedStart: true,
      isProductCreatedSuccess: false,
      isProductCreatedFailure: false,
    }),

    [productCreateSuccess]: (state, {payload}) => ({
      ...state,
      isProductCreatedStart: false,
      isProductCreatedSuccess: true,
      isProductCreatedFailure: false,
      data: payload
    }),

    [productCreateFailure]: (state, {payload}) => ({
      ...state,
      isProductCreatedStart: false,
      isProductCreatedSuccess: false,
      isProductCreatedFailure: true,
      errorMessage: payload.data

    }),
  },
  initialState
)

export default reducer;