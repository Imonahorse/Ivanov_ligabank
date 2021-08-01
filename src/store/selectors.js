import {createSelector} from 'reselect';

const MAX_LENGTH = 10;

const selectRates = (state) => state.rates;
const selectHistory = (state) => state.history;
const selectRatesStatus = (state) => state.ratesLoadStatus;
const selectUpdateRatesStatus = (state) => state.ratesUpdateStatus;
const selectModifiedHistory = createSelector(selectHistory, (history) => {
  if(history.length > MAX_LENGTH) {
    const from = 0;
    const to = history.length - MAX_LENGTH;
    const modifiedHistory = history.slice();
    modifiedHistory.splice(from, to);
    return modifiedHistory;
  }

  return history;
});

export {
  selectRates,
  selectHistory,
  selectRatesStatus,
  selectUpdateRatesStatus,
  selectModifiedHistory
};
