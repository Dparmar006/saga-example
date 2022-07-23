import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../utils'
import { USER_LOGIN_REQUEST } from './actionTypes'
import { userLoginFailure, userLoginSuccess } from './authActions'

function * authWorker ({ payload: { user, navigate } }) {
  try {
    const response = yield call(loginApiCall, user)
    if (response.status === 200) {
      yield put(userLoginSuccess(response.data.pharmacist))
      localStorage.setItem('authUser', JSON.stringify(response.data.pharmacist))
      navigate('/')
    }
  } catch (error) {
    yield put(
      userLoginFailure({
        error: error.message
      })
    )
  }
}

const loginApiCall = payload => {
  return api.post('/pharmacists/login', payload)
}

export default function * authSaga () {
  yield takeLatest(USER_LOGIN_REQUEST, authWorker)
}
