import React from 'react';
import ConverterPage from '../pages/converter-page';
import {selectRatesStatus} from '../../store/selectors';
import {useSelector} from 'react-redux';
import Loading from '../loading/loading';

function App() {
  const ratesStatus = useSelector(selectRatesStatus);

  if (ratesStatus.isLoading) {
    return <Loading/>;
  }

  return <ConverterPage/>;
}

export default App;
