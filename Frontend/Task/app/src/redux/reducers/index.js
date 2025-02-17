// @flow strict

import { INITIAL_STATE, ACTIONS } from '../constants';
import type { Action, State } from '../types';
import sanitizeCurrencies from './sanitizeCurrencies';
import setCurrenciesLoading from './setCurrenciesLoading';
import setCurrenciesError from './setCurrenciesError';
import {
  addFilteredCurrencyPair,
  removeFilteredCurrencyPair,
} from './filteredCurrencyPairReducers';
import { setRatesError, setRatesLoading, addRates } from './ratesReducers';

const rootReducer = (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case ACTIONS.SANITIZE_CURRENCIES:
      return sanitizeCurrencies(state, action);

    case ACTIONS.FETCH_CURRENCIES_CONFIG_PENDING:
      return setCurrenciesLoading(state);

    case ACTIONS.FETCH_CURRENCIES_CONFIG_ERROR:
      return setCurrenciesError(state, action);

    case ACTIONS.ADD_FILTERED_CURRENCY_PAIR:
      return addFilteredCurrencyPair(state, action);

    case ACTIONS.REMOVE_FILTERED_CURRENCY_PAIR:
      return removeFilteredCurrencyPair(state, action);

    case ACTIONS.FETCH_RATES_PENDING:
      return setRatesLoading(state);

    case ACTIONS.FETCH_RATES_ERROR:
      return setRatesError(state, action);

    case ACTIONS.ADD_RATES:
      return addRates(state, action);

    default:
      return state;
  }
};

export default rootReducer;
