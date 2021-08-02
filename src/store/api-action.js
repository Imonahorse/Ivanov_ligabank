import {
  fetchRatesRequest,
  fetchRatesSuccess,
  fetchRatesError,
  changeRatesDateSuccess,
  changeRatesDateRequest,
  changeRatesDateError
} from './actions';
import {Currency} from '../const';

const ID = '?app_id=d3db89603b8a4eaebd00071a196970c0';

const ApiRoutes = {
  rates: '/latest.json',
  archive: '/historical/',
};

const adaptData = (rates) => ({
  [Currency.RUB]: rates[Currency.RUB],
  [Currency.GBP]: rates[Currency.GBP],
  [Currency.EUR]: rates[Currency.EUR],
  [Currency.USD]: rates[Currency.USD],
  [Currency.CNY]: rates[Currency.CNY],
});

const fetchRates = () => async (dispatch, _, api) => {
  dispatch(fetchRatesRequest());
  try {
    const {data} = await api.get(`${ApiRoutes.rates}${ID}`);
    const {rates} = data;
    const adaptedData = adaptData(rates);
    dispatch(fetchRatesSuccess(adaptedData));
  } catch {
    dispatch(fetchRatesError);
  }
};

const changeRatesDate = (date) => async (dispatch, _, api) => {
  dispatch(changeRatesDateRequest());
  try {
    const {data} = await api.get(`${ApiRoutes.archive}${date}.json${ID}`);
    const {rates} = data;
    const adaptedData = adaptData(rates);
    dispatch(changeRatesDateSuccess(adaptedData));
  } catch {
    dispatch(changeRatesDateError());
  }
};

export {
  fetchRates,
  changeRatesDate
};
