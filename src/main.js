import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeRate.js';

//Business Logic//

function displayExchange(response) {
  let usDollar = $('#usDollar').val();
  for(let property in response.conversion_rates) {
    if (response.conversion_rates) {
      $('#displayExchange').append(`${property}` + " " + usDollar * `${response.conversion_rates[property]}` + "<br><br>");
    }
  }
}


//User Interface Logic//

$(document).ready(function() {
  $("#findRate").click(function() {
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response);
        console.log(response);
      });
  });
});