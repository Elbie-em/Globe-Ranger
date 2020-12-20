import countryListReducer from './countryList/countryListReducer'
import { combineReducers }from 'redux'

const rootReducer = combineReducers({
  countryList: countryListReducer,
})

export default rootReducer