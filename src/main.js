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
  } else if (currency === "BSD") {
    $('#displayExchange').text("$" + usDollar + " in BSD: " + (`${response.conversion_rates.BSD}` * usDollar).toFixed(2)); 
  } else if (currency === "CAD") {
    $('#displayExchange').text("$" + usDollar + " in CAD: " + (`${response.conversion_rates.CAD}` * usDollar).toFixed(2)); 
  } else if (currency === "CHF") {
    $('#displayExchange').text("$" + usDollar + " in CHF: " + (`${response.conversion_rates.CHF}` * usDollar).toFixed(2)); 
  } else if (currency === "CLP") {
    $('#displayExchange').text("$" + usDollar + " in CLP: " + (`${response.conversion_rates.CLP}` * usDollar).toFixed(2)); 
  } else if (currency === "CNY") {
    $('#displayExchange').text("$" + usDollar + " in CNY: " + (`${response.conversion_rates.CNY}` * usDollar).toFixed(2)); 
  } else if (currency === "COP") {
    $('#displayExchange').text("$" + usDollar + " in COP: " + (`${response.conversion_rates.COP}` * usDollar).toFixed(2)); 
  } else if (currency === "CZK") {
    $('#displayExchange').text("$" + usDollar + " in CZK: " + (`${response.conversion_rates.CZK}` * usDollar).toFixed(2)); 
  } else if (currency === "DKK") {
    $('#displayExchange').text("$" + usDollar + " in DKK: " + (`${response.conversion_rates.DKK}` * usDollar).toFixed(2)); 
  } else if (currency === "DOP") {
    $('#displayExchange').text("$" + usDollar + " in DOP: " + (`${response.conversion_rates.DOP}` * usDollar).toFixed(2)); 
  } else if (currency === "EGP") {
    $('#displayExchange').text("$" + usDollar + " in EGP: " + (`${response.conversion_rates.EGP}` * usDollar).toFixed(2)); 
  } else if (currency === "EUR") {
    $('#displayExchange').text("$" + usDollar + " in EUR: " + (`${response.conversion_rates.EUR}` * usDollar).toFixed(2)); 
  } else if (currency === "FJD") {
    $('#displayExchange').text("$" + usDollar + " in FJD: " + (`${response.conversion_rates.FJD}` * usDollar).toFixed(2)); 
  } else if (currency === "GBP") {
    $('#displayExchange').text("$" + usDollar + " in GBP: " + (`${response.conversion_rates.GBP}` * usDollar).toFixed(2)); 
  } else if (currency === "GTQ") {
    $('#displayExchange').text("$" + usDollar + " in GTQ: " + (`${response.conversion_rates.GTQ}` * usDollar).toFixed(2)); 
  } else if (currency === "HRK") {
    $('#displayExchange').text("$" + usDollar + " in HRK: " + (`${response.conversion_rates.HRK}` * usDollar).toFixed(2)); 
  } else if (currency === "HUF") {
    $('#displayExchange').text("$" + usDollar + " in HUF: " + (`${response.conversion_rates.HUF}` * usDollar).toFixed(2)); 
  } else if (currency === "IDR") {
    $('#displayExchange').text("$" + usDollar + " in IDR: " + (`${response.conversion_rates.IDR}` * usDollar).toFixed(2)); 
  } else if (currency === "ILS") {
    $('#displayExchange').text("$" + usDollar + " in ILS: " + (`${response.conversion_rates.ILS}` * usDollar).toFixed(2)); 
  } else if (currency === "INR") {
    $('#displayExchange').text("$" + usDollar + " in INR: " + (`${response.conversion_rates.INR}` * usDollar).toFixed(2)); 
  } else if (currency === "ISK") {
    $('#displayExchange').text("$" + usDollar + " in ISK: " + (`${response.conversion_rates.ISK}` * usDollar).toFixed(2)); 
  } else if (currency === "JPY") {
    $('#displayExchange').text("$" + usDollar + " in JPY: " + (`${response.conversion_rates.JPY}` * usDollar).toFixed(2)); 
  } else if (currency === "KRW") {
    $('#displayExchange').text("$" + usDollar + " in KRW: " + (`${response.conversion_rates.KRW}` * usDollar).toFixed(2)); 
  } else if (currency === "KZT") {
    $('#displayExchange').text("$" + usDollar + " in KZT: " + (`${response.conversion_rates.KZT}` * usDollar).toFixed(2)); 
  } else if (currency === "MVR") {
    $('#displayExchange').text("$" + usDollar + " in MVR: " + (`${response.conversion_rates.MVR}` * usDollar).toFixed(2)); 
  } else if (currency === "MXN") {
    $('#displayExchange').text("$" + usDollar + " in MXN: " + (`${response.conversion_rates.MXN}` * usDollar).toFixed(2)); 
  } else if (currency === "MYR") {
    $('#displayExchange').text("$" + usDollar + " in MYR: " + (`${response.conversion_rates.MYR}` * usDollar).toFixed(2)); 
  } else if (currency === "NOK") {
    $('#displayExchange').text("$" + usDollar + " in NOK: " + (`${response.conversion_rates.NOK}` * usDollar).toFixed(2)); 
  } else if (currency === "NZD") {
    $('#displayExchange').text("$" + usDollar + " in NZD: " + (`${response.conversion_rates.NZD}` * usDollar).toFixed(2)); 
  } else if (currency === "PAB") {
    $('#displayExchange').text("$" + usDollar + " in PAB: " + (`${response.conversion_rates.PAB}` * usDollar).toFixed(2)); 
  } else if (currency === "PEN") {
    $('#displayExchange').text("$" + usDollar + " in PEN: " + (`${response.conversion_rates.PEN}` * usDollar).toFixed(2)); 
  } else if (currency === "PHP") {
    $('#displayExchange').text("$" + usDollar + " in PHP: " + (`${response.conversion_rates.PHP}` * usDollar).toFixed(2)); 
  } else if (currency === "PKR") {
    $('#displayExchange').text("$" + usDollar + " in PKR: " + (`${response.conversion_rates.PKR}` * usDollar).toFixed(2)); 
  } else if (currency === "PLN") {
    $('#displayExchange').text("$" + usDollar + " in PLN: " + (`${response.conversion_rates.PLN}` * usDollar).toFixed(2)); 
  } else if (currency === "PYG") {
    $('#displayExchange').text("$" + usDollar + " in PYG: " + (`${response.conversion_rates.PYG}` * usDollar).toFixed(2)); 
  } else if (currency === "RON") {
    $('#displayExchange').text("$" + usDollar + " in RON: " + (`${response.conversion_rates.RON}` * usDollar).toFixed(2)); 
  } else if (currency === "RUB") {
    $('#displayExchange').text("$" + usDollar + " in RUB: " + (`${response.conversion_rates.RUB}` * usDollar).toFixed(2)); 
  } else if (currency === "SAR") {
    $('#displayExchange').text("$" + usDollar + " in SAR: " + (`${response.conversion_rates.SAR}` * usDollar).toFixed(2)); 
  } else if (currency === "SEK") {
    $('#displayExchange').text("$" + usDollar + " in SEK: " + (`${response.conversion_rates.SEK}` * usDollar).toFixed(2)); 
  } else if (currency === "SGD") {
    $('#displayExchange').text("$" + usDollar + " in SGD: " + (`${response.conversion_rates.SGD}` * usDollar).toFixed(2)); 
  } else if (currency === "THB") {
    $('#displayExchange').text("$" + usDollar + " in THB: " + (`${response.conversion_rates.THB}` * usDollar).toFixed(2)); 
  } else if (currency === "TRY") {
    $('#displayExchange').text("$" + usDollar + " in TRY: " + (`${response.conversion_rates.TRY}` * usDollar).toFixed(2)); 
  } else if (currency === "TWD") {
    $('#displayExchange').text("$" + usDollar + " in TWD: " + (`${response.conversion_rates.TWD}` * usDollar).toFixed(2)); 
  } else if (currency === "TWD") {
    $('#displayExchange').text("$" + usDollar + " in TWD: " + (`${response.conversion_rates.TWD}` * usDollar).toFixed(2)); 
  } else if (currency === "UAH") {
    $('#displayExchange').text("$" + usDollar + " in UAH: " + (`${response.conversion_rates.UAH}` * usDollar).toFixed(2)); 
  } else if (currency === "UYU") {
    $('#displayExchange').text("$" + usDollar + " in UYU: " + (`${response.conversion_rates.UYU}` * usDollar).toFixed(2)); 
  } else if (currency === "ZAR") {
    $('#displayExchange').text("$" + usDollar + " in ZAR: " + (`${response.conversion_rates.ZAR}` * usDollar).toFixed(2)); 
  } else if (!currency) {
    $('#displayExchange').text("Please select a currency in the first box");
  } else {
    $('#displayExchange').text(`There was an error: ${response.message}`);
  }
}


//User Interface Logic//

$(document).ready(function() {
  $('#findRate').click(function(event) {
    event.preventDefault();

    let usDollar = $('#usDollar').val();
    $('#usDollar').val("");
    let currency = $('input:radio:checked').val();
    Exchange.getExchange()
      .then(function(response) {
        displayExchange(response, usDollar, currency);
      });
  });
});