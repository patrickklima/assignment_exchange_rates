import React from 'react';
import Button from './Button';

const CurrencyRow = ({currency, changeBaseCurrency}) => {
  return (
    <tr>
      <td>{currency.name}</td>
      <td>{currency.rate}</td>
      <td><Button onClick={changeBaseCurrency} color="primary" name={currency.name}>Convert to {currency.name}</Button></td>
    </tr>
  );
};
export default CurrencyRow;