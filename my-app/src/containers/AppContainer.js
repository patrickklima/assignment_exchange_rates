import React, {Component} from 'react';
import App from '../components/App';
const moment = require('moment');

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      baseCurrency: 'EUR', 
      currencies: [],
      currencyHistory: null
    };
  }
  getHistory = (comparisonCurrency) => {
    this.setState({
      isFetching: true
    });
    const NUM_OF_DAYS = 7;
    var promises = [];
    const baseURL = 'https://api.fixer.io/';
    var apiURL = "";
    
    for (let i = 1; i <= NUM_OF_DAYS; i++) {
      apiURL = baseURL+
        (moment().subtract(i, 'days').format('YYYY-MM-DD'))+
        `?base=${this.state.baseCurrency}&symbols=${comparisonCurrency}`;
      
      console.log(apiURL);  
      console.log(i);  
      
      promises.push(
        fetch(apiURL)
        .then(response => {
          return response.json();
        })
      );
    }
    
    console.log("promises");
    console.log(promises);
    var currencyCatalog = {
      name: comparisonCurrency,
    };

    Promise.all(promises)
    .then(jsonArray => {
      console.log("jsonArray");
      console.log(jsonArray);
      currencyCatalog.data = jsonArray.map(json => ({
          date: json.date,
          rate: json.rates[comparisonCurrency]
        }
      ));
      return currencyCatalog;
    })
    .then(currencyCatalog => {
      this.setState({
        isFetching: false,
        currencyHistory: currencyCatalog
      });
    })
    .catch(e => console.log(e));
  }
  
  
  getLatest = (newBase, symbolsList) => {
    if (newBase === "") newBase = this.baseCurrency;
    
    var latestURL = 'https://api.fixer.io/latest';
    latestURL += (newBase || symbolsList ) ? '?' : '';
    latestURL += newBase ? `base=${newBase}&` : '';
    latestURL += symbolsList ? `symbols=${symbolsList.toString()}` : '';
    
    console.log(`getLatest with /n base ${newBase} and symbols ${symbolsList}`);
    console.log(latestURL);
    
    fetch(latestURL)
    .then(response => response.json())
    .then(json => {
      const currencyList = Object.keys(json.rates).map(rateKey => {
        return {
          name: rateKey,
          rate: json.rates[rateKey]
        };
      });
      console.log("currencyList");
      console.log(currencyList);
      this.setState({
        isFetching: false, 
        baseCurrency: json.base,
        currencies: currencyList
      });
    });
    
  }
  
  changeBaseCurrency = (e, newBaseCurrency) => {
    this.setState({
      baseCurrency: newBaseCurrency
    });
    this.getLatest(newBaseCurrency);
    
  }
  componentDidMount() {
    this.setState({isFetching: true});
    this.getLatest();
    this.getHistory('USD');
  }
  render() {
    return (
      <App 
        {...this.state}
        changeBaseCurrency={this.changeBaseCurrency}
      />  
    );
  }
}

export default AppContainer;