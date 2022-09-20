import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

import {
  productCreateFailure,
  productCreateSuccess,
  productStartCreate
} from "./actions"

function* createProduct({payload}) {
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/product/product", payload.credentials))
    if (response?.status === 200) {
      yield put(productCreateSuccess(response.data));
    } else {
      yield put(productCreateFailure(response.data.message));
    }
    console.log(response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(productCreateFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(productStartCreate, createProduct);
  // yield takeLatest(productDeleteStart, deleteProduct)
}
