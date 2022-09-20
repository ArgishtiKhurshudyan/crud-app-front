import {createAction} from 'redux-actions';


export const getLoginStart = createAction(
  'LOGIN_START'
);

export const getLoginSuccess = createAction(
  'LOGIN_SUCCESS'
);

export const getLoginFailure = createAction(
  'LOGIN_FAILURE'
);

export const getRegisterStart = createAction(
  'REGISTER_START'
);

export const getRegisterSuccess = createAction(
  'REGISTER_SUCCESS'
);

export const getRegisterFailure = createAction(
  'REGISTER_FAILURE'
);