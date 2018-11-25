import {
  SET_SELECTED_COUNTRY,
  COUNTRIES_HAVE_ERROR,
  COUNTRIES_ARE_LOADING,
  COUNTRIES_FETCH_SUCCESS
} from '../actions/types';

const initialState = {
  countries: [
  ],
  selectedCountry: '',
  isLoading: false,
  hasError: false
}

export default function countriesReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.name
      };
    case COUNTRIES_HAVE_ERROR:
      return {
        ...state,
        hasError: action.hasError
      };
    case COUNTRIES_ARE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case COUNTRIES_FETCH_SUCCESS:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
}