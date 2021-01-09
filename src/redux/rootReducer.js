import { combineReducers } from 'redux';
import countryListReducer from './countryList/countryListReducer';
import countryReducer from './country/countryReducer';
import regionReducer from './region/regionReducer';

const rootReducer = combineReducers({
  countryList: countryListReducer,
  country: countryReducer,
  region: regionReducer,
});

export default rootReducer;
