const {
  GET_MEDICINES_SUCCESS,
  GET_MEDICINES_FAILURE
} = require('./actionTypes')

const initialState = {
  medicines: [],
  loading: true,
  success: false,
  error: ''
}

const medicineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEDICINES_SUCCESS:
      return { ...state, ...payload, success: true, loading: false }
    case GET_MEDICINES_FAILURE:
      return { ...state, error: payload.error }

    default:
      return state
  }
}

export default medicineReducer
