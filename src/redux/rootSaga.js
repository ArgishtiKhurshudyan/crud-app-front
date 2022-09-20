import {all} from 'redux-saga/effects';
import user from './user/saga';
import product from './product/saga';
import color from './color/saga';

export default function* rootSaga() {
  yield all([
    user(),
    product(),
    color()
  ])
};