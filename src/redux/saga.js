import { fork, all } from 'redux-saga/effects'
import authSaga from './auth/authSaga'
import { medicinesWatcher } from './medicines/medicineSaga'

export default function * rootSaga () {
  yield all([fork(authSaga), medicinesWatcher()])
}
