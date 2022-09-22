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
.then((response) => {
  return response.json(); // я так думаю он вренул в дату resonse
})
.then((data) => {
  
  console.log(data);
   console.log(data.date);
})
  .catch(error => console.log('error', error));


//рассмотреть подробнее как работают промисы
*/

let myCurrencyIndex = 0; //ключ для переключения валют (У меня есть)
let switcherCurrency  //промежуточный ключ
let otherCurrencyIndex = 1; //ключ для преключения валют (Хочу купить)

//У меня есть (левая часть)
const rub = document.querySelector('.rub');
const usd = document.querySelector('.usd');
const eur = document.querySelector('.eur');

//Хочу купить (правая часть)
const oRub = document.querySelector('.o-rub');
const oUsd = document.querySelector('.o-usd');
const oEur = document.querySelector('.o-eur');

//функция для передачи ключа
function indexation(index, whichIndex, classTo) {
  whichIndex = index;
  console.log(whichIndex);
  return whichIndex;
}
//передача индекса по клику
rub.addEventListener("click", function () {
  localClassSwitch(1);
  return myCurrencyIndex = indexation(0, myCurrencyIndex, rub);
});
usd.addEventListener("click", function () {
  localClassSwitch(1);
  return myCurrencyIndex = indexation(1, myCurrencyIndex, usd);
});
eur.addEventListener("click", function () {
  localClassSwitch(1);
  return myCurrencyIndex = indexation(2, myCurrencyIndex, eur);
})

//передача индекса по клику
oRub.addEventListener("click", function () {
  localClassSwitch();
  return otherCurrencyIndex = indexation(0, otherCurrencyIndex, oRub);
});
oUsd.addEventListener("click", function () {
  localClassSwitch();
  return otherCurrencyIndex = indexation(1, otherCurrencyIndex, oUsd);
});
oEur.addEventListener("click", function () {
  localClassSwitch();
  return otherCurrencyIndex = indexation(2, otherCurrencyIndex, oEur);
})

//функция для изменения отображения выбранной валюты в меню
let leftCurrencyNames = document.querySelectorAll('.currency-name');
let rightCurrencyNames = document.querySelectorAll('.o-currency-name');
function localClassSwitch(writeAnythingToLeftSide) {
  writeAnythingToLeftSide ?
    leftCurrencyNames.forEach(n => n.classList.remove('active'))
    :
    rightCurrencyNames.forEach(n => n.classList.remove('active'))
  event.target.classList.add('active');
}

const switcher = document.getElementById('Capa_1'); //svg стрелки в середине

switcher.addEventListener("click", function () {
  switchCurrencyIndex();
  switchCurrencyClass();
});

//свитчит индексы 
function switchCurrencyIndex() {
  switcherCurrency = myCurrencyIndex;
  myCurrencyIndex = otherCurrencyIndex;
  otherCurrencyIndex = switcherCurrency;
  console.dir([myCurrencyIndex, otherCurrencyIndex, switcherCurrency]);
};

//свитчит класс по нажатию на svg стрелки
function switchCurrencyClass() {
  if (myCurrencyIndex === otherCurrencyIndex) { return }
  else {
    leftCurrencyNames.forEach(n => n.classList.remove('active'));
    rightCurrencyNames.forEach(n => n.classList.remove('active'));
    switch (myCurrencyIndex) {
      case 0:
        rub.classList.add('active');
        break;
      case 1:
        usd.classList.add('active');
        break;
      case 2:
        eur.classList.add('active');
        break;
    };
    switch (otherCurrencyIndex) {
      case 0:
        oRub.classList.add('active');
        break;
      case 1:
        oUsd.classList.add('active');
        break;
      case 2:
        oEur.classList.add('active');
        break;
    }
  }
}
