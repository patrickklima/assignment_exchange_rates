import React from 'react';
import JumbotronFluid from './JumbotronFluid';
import HistoricalRates from './HistoricalRates';
import CurrencyIndex from './CurrencyIndex';

const App = ({baseCurrency, currencies, currencyHistory, isFetching, changeBaseCurrency}) => {
  return (
    <div className="App">
      <JumbotronFluid baseCurrency={baseCurrency} />
      <h4 className="text-center">Rates from the Past Week for</h4>
      <HistoricalRates currencyHistory={currencyHistory} isFetching={isFetching} baseCurrency={baseCurrency}/>
      <h4 className="text-center">Today's Currency Index</h4>
      <CurrencyIndex currencies={currencies} isFetching={isFetching} changeBaseCurrency={changeBaseCurrency} />
    </div>
  );
};

export default App;
