import axios from 'axios';
import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from './countryListTypes';

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = countries => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = error => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchCountries = () => dispatch => {
  dispatch(fetchCountriesRequest());
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const countryListData = response.data;
      dispatch(fetchCountriesSuccess(countryListData));
    }).catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCountriesFailure(errorMsg));
    });
};
