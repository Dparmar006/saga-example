import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS
} from './actionTypes'

export const userLoginRequest = (payload, navigate) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { user: payload, navigate }
  }
}
export const userLoginSuccess = payload => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload
  }
}

export const userLoginFailure = errorMsg => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: errorMsg
  }
}
