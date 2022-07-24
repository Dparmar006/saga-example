import { combineReducers } from 'redux'
import userReducer from './auth/authReducer'
import medicinesReducer from './medicines/medicineReducer'

const rootReducer = combineReducers({
  user: userReducer,
  medicines: medicinesReducer
})

export default rootReducer
