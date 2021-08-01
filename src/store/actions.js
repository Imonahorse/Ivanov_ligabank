import {createAction} from '@reduxjs/toolkit';

const ActionsType = {
  FETCH_RATES_REQUEST: 'fetchRatesRequest',
  FETCH_RATES_SUCCESS: 'fetchRatesSuccess',
  FETCH_RATES_ERROR: 'fetchRatesError',
  CHANGE_RATES_DATA_SUCCESS: 'changeRatesDataSuccess',
  CHANGE_RATES_DATA_ERROR: 'changeRatesDataError',
  CHANGE_RATES_DATA_REQUEST: 'changeRatesDataLoading',
  GET_EXCHANGE_DATA: 'etExchangeData',
  CLEAR_HISTORY: 'clearHistory',
};

const fetchRatesRequest = createAction(ActionsType.FETCH_RATES_REQUEST);
const fetchRatesSuccess = createAction(ActionsType.FETCH_RATES_SUCCESS, (rates) => ({
  payload: rates,
}));
const fetchRatesError = createAction(ActionsType.FETCH_RATES_ERROR);
const changeRatesDateRequest = createAction(ActionsType.CHANGE_RATES_DATA_REQUEST);
const changeRatesDateSuccess = createAction(ActionsType.CHANGE_RATES_DATA_SUCCESS, (rates) => ({
  payload: rates,
}));
const changeRatesDateError = createAction(ActionsType.CHANGE_RATES_DATA_ERROR);
const clearHistory = createAction(ActionsType.CLEAR_HISTORY);
const addHistoryData = createAction(ActionsType.GET_EXCHANGE_DATA, (exchangeItem) => ({
  payload: exchangeItem,
}));

export {
  fetchRatesRequest,
  fetchRatesSuccess,
  fetchRatesError,
  addHistoryData,
  changeRatesDateSuccess,
  clearHistory,
  changeRatesDateRequest,
  changeRatesDateError
};

