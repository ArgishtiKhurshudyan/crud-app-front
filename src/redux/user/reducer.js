import {handleActions} from 'redux-actions';

import {
  getLoginStart,
  getLoginSuccess,
  getLoginFailure,
  getRegisterStart,
  getRegisterSuccess,
  getRegisterFailure
} from "./actions";

const initialState = {
  isLoginStart: false,
  isLoginSuccess: false,
  isLoginFailure: false,
  isRegisterStart: false,
  isRegisterSuccess: false,
  isRegisterFailure: false,
  data: [],
  errorMessage: '',
};

const reducer = handleActions(
  {
    [getLoginStart]: (state) => ({
      ...state,
      isLoginStart: true,
      isLoginSuccess: false,
      isLoginFailure: false,
    }),
    [getLoginSuccess]: (state, {payload}) => ({
      ...state,
      isLoginStart: false,
      isLoginSuccess: true,
      isLoginFailure: false,
      data: payload.details
    }),
    [getLoginFailure]: (state, {payload}) => {
      return {
        ...state,
        isLoginStart: false,
        isLoginSuccess: false,
        isLoginFailure: true,
        errorMessage: payload
      }

    },
    [getRegisterStart]: (state) => ({
      ...state,
      isRegisterStart: true,
      isRegisterSuccess: false,
      isRegisterFailure: false,

    }),
    [getRegisterSuccess]: (state, {payload}) => ({
      ...state,
      isRegisterData: false,
      isRegisterSuccess: true,
      data: payload,

    }),
    [getRegisterFailure]: (state, {payload}) => {
      return {
        ...state,
        isRegisterData: false,
        isRegisterSuccess: false,
        isRegisterFailure: true,
        errorMessage: payload

      }
    },
  },
  initialState
);

export default reducer;