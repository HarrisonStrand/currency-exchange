import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeRate.js';

//Business Logic//

function clearFields() {
  $('#usDollar').val();
  $('#displayExchange').text("");
}

function displayExchange(response) {
  let usDollar = $('#usDollar').val();
  for(let property in response.conversion_rates) {
    if (response.conversion_rates) {
      $('#displayExchange').append(`${property}:` + " " + usDollar * `${response.conversion_rates[property]}` + "<br><br>");
    }
  }
}

function displayErrors(error) {
  $('#errors').text(`${error}`);
}


//User Interface Logic//

$(document).ready(function() {
  $('#findRate').click(function(event) {
    event.preventDefault();
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
    $('#clear').click(function() {
      clearFields();
    })
  });
});