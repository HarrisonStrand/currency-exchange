import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeRate.js';

//Business Logic//

function displayExchange(response) {
  for(let property in response.conversion_rates) {
    if (response.conversion_rates) {
      $('#displayExchange').append(`${property}:` + " " + usDollar * `${response.conversion_rates[property]}`+ " ");
    }
  }
}

//User Interface Logic//

$(document).ready(function() {
  $('#findRate').click(function(event) {
    event.preventDefault();
    let usDollar = $('#usDollar').val();
    $('#usDollar').val();
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response);
      })
  });
});