// API exchange rates
/*
var myHeaders = new Headers();
myHeaders.append("apikey", "75r16726IFyt9K5HSCuBZ9I516KKlzMz");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=RUB", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

let regex = /[ ]/g;

let amount = document.querySelector('.amount');

amount.oninput = function () {
  this.value = this.value.replace(regex, '');    //попробовать сделать общую функцию
}

let recalculation = document.querySelector('.recalculation');

recalculation.oninput = function () {
  this.value = this.value.replace(regex, '');
}

