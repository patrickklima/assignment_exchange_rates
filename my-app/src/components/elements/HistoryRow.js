import React from 'react';

const HistoryRow = ({day}) => {
  return (
    <tr>
      <td>{day.date}</td>
      <td>{day.rate}</td>
    </tr>
  );
};
export default HistoryRow;


