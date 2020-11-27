import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeRate.js';

//Business Logic//

function displayExchange(response, usDollar, currency) {
  if (currency === "AED") {
    $('#displayExchange').text("$" + usDollar + " in AED: " + (`${response.conversion_rates.AED}` * usDollar).toFixed(2)); 
  } else if (currency === "ARS") {
    $('#displayExchange').text("$" + usDollar + " in ARS: " + (`${response.conversion_rates.ARS}` * usDollar).toFixed(2)); 
  } else if (currency === "AUD") {
    $('#displayExchange').text("$" + usDollar + " in AUD: " + (`${response.conversion_rates.AUD}` * usDollar).toFixed(2)); 
  } else if (currency === "BGN") {
    $('#displayExchange').text("$" + usDollar + " in BGN: " + (`${response.conversion_rates.BGN}` * usDollar).toFixed(2)); 
  } else if (currency === "BRL") {
    $('#displayExchange').text("$" + usDollar + " in BRL: " + (`${response.conversion_rates.BRL}` * usDollar).toFixed(2)); 
  } else if (!currency) {
    $('#displayExchange').text("Please select a currency in the options above");
  } else {
    $('#displayExchange').text(`There was an error: ${response.message}`);
  }
}


//User Interface Logic//

$(document).ready(function() {
  $('#findRate').click(function(event) {
    event.preventDefault();
    let usDollar = $('#usDollar').val();
    $('#usDollar').val();
    let currency = $('input:radio:checked').val();
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response, usDollar, currency);
      });
  });
});