// @flow strict

import { INITIAL_STATE, ACTIONS } from '../constants';
import type { Action, State } from '../types';
import sanitizeCurrencies from './sanitizeCurrencies';
import setCurrenciesLoading from './setCurrenciesLoading';
import setCurrenciesError from './setCurrenciesError';

const rootReducer = (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case ACTIONS.SANITIZE_CURRENCIES:
      return sanitizeCurrencies(state, action);

    case ACTIONS.FETCH_CURRENCIES_CONFIG_PENDING:
      return setCurrenciesLoading(state);

    case ACTIONS.FETCH_CURRENCIES_CONFIG_ERROR:
      return setCurrenciesError(state, action);
    default:
      return state;
  }
};

export default rootReducer;
