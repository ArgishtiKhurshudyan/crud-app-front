import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {
  colorCreateFailure,
  colorCreateSuccess,
  colorStartCreate
} from "./actions"

function* createColor({payload}) {
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/color", payload.credentials))
    if (response?.status === 200) {
      yield put(colorCreateSuccess(response.data));
    } else {
      yield put(colorCreateFailure(response.data.message));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(colorCreateFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(colorStartCreate, createColor);
}
