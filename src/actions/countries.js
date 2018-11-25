import {
  COUNTRIES_HAVE_ERROR,
  COUNTRIES_ARE_LOADING,
  COUNTRIES_FETCH_SUCCESS,
  SET_SELECTED_COUNTRY
} from './types';
import axios from 'axios';

export const selectCountry = name => ({
  type: SET_SELECTED_COUNTRY,
  name
});

export const countriesHaveError = bool => ({
  type: COUNTRIES_HAVE_ERROR,
  hasError: bool
})

export const countriesAreLoading = bool => ({
  type: COUNTRIES_ARE_LOADING,
  isLoading: bool
});

export const countriesFetchSuccess = countries => ({
  type: COUNTRIES_FETCH_SUCCESS,
  countries
});

export const countriesFetchData = () => dispatch => {
  dispatch(countriesAreLoading(true));
  const URL = 'https://restcountries.eu/rest/v2/all';
  axios.get(URL)
    .then(resp => {
      if(resp.status !== 200) {
        throw Error(resp.statusText);
      }

      dispatch(countriesAreLoading(false));
      return resp;
    })
    .then(resp => {
      dispatch(countriesFetchSuccess(resp.data));
      dispatch(selectCountry(resp.data[0].name));
    })
    .catch(err => {
      dispatch(countriesHaveError(true))
    })
};
