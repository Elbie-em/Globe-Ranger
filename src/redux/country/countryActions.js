import axios from 'axios';
import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE } from './countryTypes';

export const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

export const fetchCountrySuccess = country => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: country,
});

export const fetchCountryFailure = error => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

export const fetchCountry = name => dispatch => {
  dispatch(fetchCountryRequest());
  axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      const countryData = response.data;
      dispatch(fetchCountrySuccess(countryData));
    }).catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCountryFailure(errorMsg));
    });
};
