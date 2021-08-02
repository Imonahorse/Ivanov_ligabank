import {
  fetchRatesRequest,
  fetchRatesSuccess,
  fetchRatesError,
  changeRatesDateSuccess,
  changeRatesDateRequest,
  changeRatesDateError
} from './actions';
import {Currency} from '../const';

const ApiRoutes = {
  rates: '/daily_json.js',
  archive: '/archive/',
};

const adaptData = (data) => ({
  [Currency.RUB]: 1,
  [Currency.GBP]: data[Currency.GBP].Value,
  [Currency.EUR]: data[Currency.EUR].Value,
  [Currency.USD]: data[Currency.USD].Value,
  [Currency.CNY]: data[Currency.CNY].Value,
});

const fetchRates = () => async (dispatch, _, api) => {
  dispatch(fetchRatesRequest());
  try {
    const {data} = await api.get(ApiRoutes.rates);
    const {Valute} = data;
    const adaptedData = adaptData(Valute);
    dispatch(fetchRatesSuccess(adaptedData));
  } catch {
    dispatch(fetchRatesError);
  }
};

const changeRatesDate = (date) => async (dispatch, _, api) => {
  dispatch(changeRatesDateRequest());
  try {
    const {data} = await api.get(`${ApiRoutes.archive}${date}${ApiRoutes.rates}`);
    const {Valute} = data;
    const adaptedData = adaptData(Valute);
    dispatch(changeRatesDateSuccess(adaptedData));
  } catch {
    dispatch(changeRatesDateError());
  }
};

export {
  fetchRates,
  changeRatesDate
};
