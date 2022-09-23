import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {
  colorCreateFailure,
  colorCreateSuccess,
  colorDeleteFailure,
  colorDeleteStart,
  colorDeleteSuccess,
  colorStartCreate,
  colorUpdateFailure,
  colorUpdateStart,
  colorUpdateSuccess,
  getColorFailure,
  getColorStart, getColorSuccess,
} from "./actions"

function* createColor({payload}) {
  const token = localStorage.getItem('access_token')
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/color", payload.color, {headers: {"authorization": `Bearer ${token}`}}))
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

function* updateColor({payload}) {
  try {
    const response = yield call(() => axios.put(`http://localhost:5000/api/color/${payload.id}`, {colorName: payload.colorName}))
    if (response?.status === 201) {
      yield put(colorUpdateSuccess(payload));
      console.log('response.data', response.data)
    } else {
      yield put(colorUpdateFailure(response.data.message));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(colorUpdateFailure(e?.response?.data?.message));
    }
  }
}

function* deleteColor({payload}) {
  const token = localStorage.getItem('access_token')
  try {
    const response = yield call(() => axios.delete(`http://localhost:5000/api/color/${payload.id}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(colorDeleteSuccess(payload.id));
    } else {
      yield put(colorDeleteFailure(response.data.message));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(colorDeleteFailure(e?.response?.data?.message));
    }
  }
}

function* getColors({payload}) {
  const token = localStorage.getItem('access_token')
  try {
    const response = yield call(() => axios.get(" http://localhost:5000/api/color", {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      console.log('response.data', response.data)
      yield put(getColorSuccess(response.data));
    } else {
      yield put(getColorFailure(response.data.message));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(getColorFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(colorStartCreate, createColor);
  yield takeLatest(colorUpdateStart, updateColor);
  yield takeLatest(colorDeleteStart, deleteColor);
  yield takeLatest(getColorStart, getColors);
}
