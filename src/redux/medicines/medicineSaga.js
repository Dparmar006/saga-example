import { getMedicinesFailure, getMedicinesSuccess } from './medicineActions'

const { takeLatest, call, put } = require('redux-saga/effects')
const { api } = require('../../utils')
const { GET_MEDICINES_REQUEST } = require('./actionTypes')

function * medicinesWorker () {
  try {
    const response = yield call(getMedicineApiCall)
    yield put(getMedicinesSuccess(response.data))
  } catch (error) {
    yield put(getMedicinesFailure({ error: error.message }))
  }
}

const getMedicineApiCall = () => {
  return api.get('/medicines')
}

export function * medicinesWatcher () {
  yield takeLatest(GET_MEDICINES_REQUEST, medicinesWorker)
}
