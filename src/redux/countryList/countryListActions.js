import axios from 'axios'
import {FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE} from './countryListTypes'

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST
  }
}

export const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries
  }
}

export const fetchCountriesFailure = (error) => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error
  }
}

