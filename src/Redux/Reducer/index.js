import { combineReducers } from 'redux'
import insurances from './insurance_reducer'

export default combineReducers({
  insurances: insurances
})