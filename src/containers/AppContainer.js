import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// components / reducers
import AppLayout from '../layouts/AppLayout';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const enhancers = applyMiddleware(thunk, logger);

  return createStore(rootReducer, initialState, enhancers);
}

const store = configureStore({});

const AppContainer = () => (
    <Provider store={store}>
      <AppLayout />
    </Provider>
)

export default AppContainer;