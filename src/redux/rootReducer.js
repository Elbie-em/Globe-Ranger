import countryListReducer from './countryList/countryListReducer'
import countryReducer from './country/countryReducer'
import regionReducer from './region/regionReducer'
import { combineReducers }from 'redux'


const rootReducer = combineReducers({
  countryList: countryListReducer,
  country: countryReducer,
  region: regionReducer
})

export default rootReducer