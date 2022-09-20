import {handleActions} from 'redux-actions';


import {
  colorCreateFailure,
  colorCreateSuccess,
  colorStartCreate
} from "./actions"


const initialState = {
  isColorCreatedStart: false,
  isColorCreatedSuccess: false,
  isColorCreatedFailure: false,
  data: [],
  errorMessage: '',
}


const reducer = handleActions({
    [colorStartCreate]: (state) => ({
      ...state,
      isColorCreatedStart: true,
      isColorCreatedSuccess: false,
      isColorCreatedFailure: false,
    }),

    [colorCreateSuccess]: (state, {payload}) => ({
      ...state,
      isColorCreatedStart: false,
      isColorCreatedSuccess: true,
      isColorCreatedFailure: false,
      data: payload
    }),

    [colorCreateFailure]: (state, {payload}) => ({
      ...state,
      isColorCreatedStart: false,
      isColorCreatedSuccess: false,
      isColorCreatedFailure: true,
      errorMessage: payload.data

    }),
  },
  initialState
)

export default reducer;