import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {adaptData} from '../const';

const ID = '?app_id=d3db89603b8a4eaebd00071a19';

const ApiRoutes = {
  rates: '/latest.json',
  archive: '/historical/',
};

const initialState = {
  rates: {
    RUB: 73.4737,
    GBP: 0.719124,
    EUR: 0.844202,
    USD: 1,
    CNY: 6.4909,
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

const fetchRates = createAsyncThunk(
  'rates/fetchRates',
  async (_, {extra: api}) => {
    try {
      const {data} = await api.get(`${ApiRoutes.rates}${ID}`);
      const {rates} = data;
      return adaptData(rates);
    } catch (err) {
      throw new Error(err);
    }
  },
);

const changeRatesDate = createAsyncThunk(
  'rates/changeRatesDate',
  async (date, {extra: api}) => {
    try {
      const {data} = await api.get(`${ApiRoutes.archive}${date}.json${ID}`);
      const {rates} = data;
      return adaptData(rates);
    } catch (err) {
      throw new Error(err);
    }
  },
);

const slice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    addHistoryData: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: {
    [fetchRates.pending]: (state) => {
      state.ratesLoadStatus.isLoading = true;
      state.ratesLoadStatus.isError = false;
      state.ratesLoadStatus.isSuccess = false;
    },
    [fetchRates.fulfilled]: (state, action) => {
      state.rates = action.payload;
      state.ratesLoadStatus.isLoading = false;
      state.ratesLoadStatus.isError = false;
      state.ratesLoadStatus.isSuccess = true;
    },
    [fetchRates.rejected]: (state) => {
      state.ratesLoadStatus.isLoading = false;
      state.ratesLoadStatus.isError = true;
      state.ratesLoadStatus.isSuccess = false;
    },
    [changeRatesDate.pending]: (state) => {
      state.ratesUpdateStatus.isLoading = true;
      state.ratesUpdateStatus.isError = false;
      state.ratesUpdateStatus.isSuccess = false;
    },
    [changeRatesDate.fulfilled]: (state, action) => {
      state.rates = action.payload;
      state.ratesUpdateStatus.isLoading = false;
      state.ratesUpdateStatus.isError = false;
      state.ratesUpdateStatus.isSuccess = true;
    },
    [changeRatesDate.rejected]: (state) => {
      state.ratesUpdateStatus.isLoading = false;
      state.ratesUpdateStatus.isError = true;
      state.ratesUpdateStatus.isSuccess = false;
    },
  },
});

export default slice.reducer;
export const {addHistoryData, clearHistory} = slice.actions;
export {fetchRates, changeRatesDate};
