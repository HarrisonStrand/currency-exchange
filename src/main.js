import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeRate.js';

//Business Logic//

function displayExchange(response, usDollar, currency) {
  if ((!currency) && (response.status != 'success')) {
    $('#displayExchange').text(`There was an error: ${response.message}`);
  } else if (!currency) {
    $('#displayExchange').text('Please select a currency in first box');
  } else if (usDollar === '') {
    $('#displayExchange').text('Please select USD amount in second box');
  } else if (response.result === 'success') {
    $('#displayExchange').text(`${usDollar} in ${currency}: ${response.conversion_rates[currency]*usDollar}`); 
  } else {
    $('#displayExchange').text(`There was an error: ${response.message}`);
  }
}


//User Interface Logic//

$(document).ready(function() {
  $('#findRate').click(function(event) {
    event.preventDefault();

    let usDollar = $('#usDollar').val();
    console.log(usDollar);
    $('#usDollar').val("");
    let currency = $('input:radio:checked').val();
    console.log(currency);
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response, usDollar, currency);
      });
  });
});