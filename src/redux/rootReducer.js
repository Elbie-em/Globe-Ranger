import countryListReducer from './countryList/countryListReducer'
import countryReducer from './country/countryReducer'
import { combineReducers }from 'redux'

const rootReducer = combineReducers({
  countryList: countryListReducer,
  country: countryReducer
})

export default rootReducer