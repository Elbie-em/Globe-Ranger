import { fetchCountriesRequest, fetchCountriesSuccess, fetchCountriesFailure } from '../../redux'
import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from '../../redux/countryList/countryListTypes'
import countryList from '../jsonMocks/countryList.json'

describe('Action Creators Tests', () => {
  test('should create an action to load data', () => {
    const expectedAction = {
      type: FETCH_COUNTRIES_REQUEST,
    };

    expect(fetchCountriesRequest(countryList)).toEqual(expectedAction);
  });

  test('should create an action to add countries to the redux store', () => {
    const expectedAction = {
      type: FETCH_COUNTRIES_SUCCESS,
      payload: countryList
    };

    expect(fetchCountriesSuccess(countryList)).toEqual(expectedAction);
  });

  test('should create an action to load an eror', () => {
    const errorMsg = 'Error Fetching Data'
    const expectedAction = {
      type: FETCH_COUNTRIES_FAILURE,
      payload: errorMsg
    };

    expect(fetchCountriesFailure(errorMsg)).toEqual(expectedAction);
  });
})