import React from 'react';
import CurrencyRow from './elements/CurrencyRow';

const CurrencyIndex = ({currencies, isFetching, changeBaseCurrency}) => {
  const currencyTableBody = currencies.map(currency => {
    return <CurrencyRow currency={currency} key={currency.name} changeBaseCurrency={changeBaseCurrency}/>;
  });
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-4">
        <table className='table'>  
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Currency</th>
              <th scope='col'>Exchange Rate</th>
              <th scope='col'>Change Base Currency</th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? <tr><td>Loading...</td></tr> : currencyTableBody}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default CurrencyIndex;