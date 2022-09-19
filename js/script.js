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

const currencyArray = document.querySelectorAll('.currency-name');

let myCurrencyIndex = 0; //ключ для переключения валют (У меня есть)
let switcherCurrency  //при переключении через switcher
let otherCurrencyIndex = 1; //ключ для преключения валют (Хочу купить)

//У меня есть
const rub = document.querySelector('.rub');
const usd = document.querySelector('.usd');
const eur = document.querySelector('.eur');

//функция для передачи ключа
function indexation(index, whichIndex) {
  whichIndex = index;
  console.log(whichIndex);
  return whichIndex;
}
//передача индекса по клику
rub.addEventListener("click", function () {
  return myCurrencyIndex = indexation(0, myCurrencyIndex);
});
usd.addEventListener("click", function () {
  return myCurrencyIndex = indexation(1, myCurrencyIndex);
});
eur.addEventListener("click", function () {
  return myCurrencyIndex = indexation(2, myCurrencyIndex);
})

//Хочу купить
const oRub = document.querySelector('.o-rub');
const oUsd = document.querySelector('.o-usd');
const oEur = document.querySelector('.o-eur');

//передача индекса по клику
oRub.addEventListener("click", function () {
  return otherCurrencyIndex = indexation(0, otherCurrencyIndex);
});
oUsd.addEventListener("click", function () {
  return otherCurrencyIndex = indexation(1, otherCurrencyIndex);
});
oEur.addEventListener("click", function () {
  return otherCurrencyIndex = indexation(2, otherCurrencyIndex);
})

const switcher = document.getElementById('Capa_1');

switcher.addEventListener("click", function () {
  switchCurrency();
});

function switchCurrencyIndex() {
  switcherCurrency = myCurrencyIndex;
  myCurrencyIndex = otherCurrencyIndex;
  otherCurrencyIndex = switcherCurrency;
  console.dir([myCurrencyIndex, otherCurrencyIndex, switcherCurrency]);
};

function switchCurrencyClass() {
  if (myCurrencyIndex === otherCurrencyIndex) {return};
} 
