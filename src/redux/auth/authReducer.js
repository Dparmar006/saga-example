import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from './actionTypes'

const initialState = {
  password: '',
  email: '',
  numberOfMedicalStores: null,
  role: null,
  _id: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  createdAt: '',
  token: '',
  loading: true,
  success: false,
  error: ''
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, ...payload, success: true, loading: false }
    case USER_LOGIN_FAILURE:
      return { ...state, error: payload.error, loading: false, success: false }

    default:
      return state
  }
}

export default userReducer
