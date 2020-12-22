import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchCountries } from '../../redux'
import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from '../../redux/countryList/countryListTypes'
import countryList from '../jsonMocks/countryList.json'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('REST Country API Tests', () => {
   test('Successfully fetches data from the API', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: countryList
        }
      })
    );
    const store = mockStore([]);
    store
      .dispatch(fetchCountries())
      .then(() => {
      const action = store.getActions();
      expect(action[0].type).toBe(FETCH_COUNTRIES_REQUEST);
      expect(action[1].type).toBe(FETCH_COUNTRIES_SUCCESS);
      expect(action[1].payload).toEqual({results:countryList});
      });
    });

    test('Erroneously fetches data from the API', () => {
      const errorMessage = 'Error fetching data from API';
      axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

      const store = mockStore([]);
      store
      .dispatch(fetchCountries())
      .then(() => {
      const action = store.getActions();
      expect(action[0].type).toBe(FETCH_COUNTRIES_REQUEST);
      expect(action[1].type).toBe(FETCH_COUNTRIES_FAILURE);
      expect(action[1].payload).toEqual(errorMessage);
      });

  
      
    });
})