import {createReducer} from '@reduxjs/toolkit';
import {
  changeRatesDateSuccess,
  clearHistory,
  fetchRatesSuccess,
  addHistoryData,
  changeRatesDateRequest,
  changeRatesDateError, fetchRatesRequest, fetchRatesError
} from './actions';

const initialState = {
  rates: {
    RUB: 1,
    JPY: 1,
    EUR: 1,
    USD: 1,
    CAD: 1,
  },
  history: [],
  ratesLoadStatus: {
    isError: false,
    isSuccess: false,
    isLoading: false,
  },
  ratesUpdateStatus: {
    isError: false,
    isSuccess: false,
    isLoading: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRatesSuccess, (state, action) => {
      state.rates = action.payload;
      state.ratesLoadStatus.isLoading = false;
      state.ratesLoadStatus.isError = false;
      state.ratesLoadStatus.isSuccess = true;
    })

    .addCase(fetchRatesRequest, (state) => {
      state.ratesLoadStatus.isLoading = true;
      state.ratesLoadStatus.isError = false;
      state.ratesLoadStatus.isSuccess = false;
    })

    .addCase(fetchRatesError, (state, action) => {
      state.rates = action.payload;
      state.ratesLoadStatus.isLoading = false;
      state.ratesLoadStatus.isError = true;
      state.ratesLoadStatus.isSuccess = false;
    })

    .addCase(changeRatesDateSuccess, (state, action) => {
      state.rates = action.payload;
      state.ratesUpdateStatus.isLoading = false;
      state.ratesUpdateStatus.isError = false;
      state.ratesUpdateStatus.isSuccess = true;
    })

    .addCase(changeRatesDateRequest, (state) => {
      state.ratesUpdateStatus.isLoading = true;
      state.ratesUpdateStatus.isError = false;
      state.ratesUpdateStatus.isSuccess = false;
    })

    .addCase(changeRatesDateError, (state) => {
      state.ratesUpdateStatus.isLoading = false;
      state.ratesUpdateStatus.isError = true;
      state.ratesUpdateStatus.isSuccess = false;
    })

    .addCase(addHistoryData, (state, action) => {
      state.history.push(action.payload);
    })

    .addCase(clearHistory, (state) => {
      state.history = [];
    });
});

export default reducer;
