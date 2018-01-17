import React from 'react';
import HistoryRow from './elements/HistoryRow';

const HistoricalRates = ({currencyHistory, isFetching, baseCurrency}) => {
  
  if (!currencyHistory) {
    return (
      <div>Choose a comparison currency...</div>
    );
  }
  
  const historyTableBody = currencyHistory.data.map(day => {
    return <HistoryRow day={day} key={day.date} />;
  });
    
    
  return (
  <div className="row justify-content-md-center">
    <div className="col-md-4">
        <table className='table'>  
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>{currencyHistory.name} to {baseCurrency}</th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? <tr><td>Loading...</td></tr> : historyTableBody}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalRates;