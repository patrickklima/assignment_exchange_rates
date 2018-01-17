import React from 'react';

const JumbotronFluid = ({baseCurrency}) => {
  return (
  <div className="jumbotron">
    <h1 className="display-4">Exchange Rates Around the World</h1>
    <p className="lead">Calculate Your Exchange Rate</p>
    <hr className="my-4" />
    <p className="font-italic">Our current base currency is {baseCurrency}</p>
    <p className="font-italic">To choose a different currency, choose from the list below. </p>
  </div>
  );
};

export default JumbotronFluid;
