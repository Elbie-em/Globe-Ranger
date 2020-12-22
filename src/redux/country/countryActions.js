import {FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE} from './countryTypes'

export const fetchCountryRequest = () => {
  return {
    type: FETCH_COUNTRY_REQUEST
  }
}

export const fetchCountrySuccess = (country) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: country
  }
}

export const fetchCountryFailure = (error) => {
  return {
    type: FETCH_COUNTRY_FAILURE,
    payload: error
  }
}

