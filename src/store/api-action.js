import {
  fetchRatesRequest,
  fetchRatesSuccess,
  fetchRatesError,
  changeRatesDateSuccess,
  changeRatesDateRequest,
  changeRatesDateError
} from './actions';
import {Valutes} from '../const';

const ApiRoutes = {
  rates: '/daily_json.js',
  archive: '/archive/',
};

const adaptData = (data) => ({
  [Valutes.RUB]: 1,
  [Valutes.JPY]: data[Valutes.JPY].Value,
  [Valutes.EUR]: data[Valutes.EUR].Value,
  [Valutes.USD]: data[Valutes.USD].Value,
  [Valutes.CAD]: data[Valutes.CAD].Value,
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
