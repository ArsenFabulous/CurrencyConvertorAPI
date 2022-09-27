// API exchange rates

var myHeaders = new Headers();
myHeaders.append("apikey", "75r16726IFyt9K5HSCuBZ9I516KKlzMz");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function getCurrencies() {
  fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=RUB", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('USD', data.rates.USD)
      localStorage.setItem('EUR', data.rates.EUR)
    })
    .catch(error => console.log('error', error));
};

window.addEventListener("load", async function () {
  greyCurrencyChange();
  if (!localStorage.getItem('USD') && !localStorage.getItem('EUR')) {
    await getCurrencies();
    
  } else {
    console.log('всё нормально');
  }
});

//валюты относительно рубля
let rubCurrency = 1;
let usdCurrency = localStorage.getItem('USD');
console.log(usdCurrency);
let eurCurrency = localStorage.getItem('EUR');
console.log(eurCurrency);

//валюта по умолчанию
let valueLeft = rubCurrency;
let valueRight = usdCurrency;
let valueOther;

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
//слева передача индекса по клику 
rub.addEventListener("click", function () {
  localClassSwitch(1);
  greyTextCurrencyChange(greyLeftText, 'RUB');
  valueation(rubCurrency, 1);
  return myCurrencyIndex = indexation(0, myCurrencyIndex, rub);
});
usd.addEventListener("click", function () {
  localClassSwitch(1);
  valueation(usdCurrency, 1);
  greyTextCurrencyChange(greyLeftText, 'USD');
  return myCurrencyIndex = indexation(1, myCurrencyIndex, usd);
});
eur.addEventListener("click", function () {
  localClassSwitch(1);
  valueation(eurCurrency, 1);
  greyTextCurrencyChange(greyLeftText, 'EUR');
  return myCurrencyIndex = indexation(2, myCurrencyIndex, eur);
})

//справа передача индекса по клику
oRub.addEventListener("click", function () {
  localClassSwitch();
  valueation(rubCurrency);
  greyTextCurrencyChange(greyRightText, 'RUB');
  return otherCurrencyIndex = indexation(0, otherCurrencyIndex, oRub);
});
oUsd.addEventListener("click", function () {
  localClassSwitch();
  valueation(usdCurrency);
  greyTextCurrencyChange(greyRightText, 'USD');
  return otherCurrencyIndex = indexation(1, otherCurrencyIndex, oUsd);
});
oEur.addEventListener("click", function () {
  localClassSwitch();
  valueation(eurCurrency);
  greyTextCurrencyChange(greyRightText, 'EUR');
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
  switchCurrency();
  switchCurrencyClass();
});

//свитчит индексы и валюты 
function switchCurrency() {
  switcherCurrency = myCurrencyIndex; //промежуточная
  myCurrencyIndex = otherCurrencyIndex;
  otherCurrencyIndex = switcherCurrency;
  valueOther = valueLeft; // промежуточнаяа
  valueLeft = valueRight;
  valueRight = valueOther;
  console.dir([myCurrencyIndex, otherCurrencyIndex, switcherCurrency]);
  console.dir([valueLeft,valueRight]);
};

//свитчит класс и серый текст по нажатию на svg стрелки
function switchCurrencyClass() {
  if (myCurrencyIndex === otherCurrencyIndex) { return }
  else {
    leftCurrencyNames.forEach(n => n.classList.remove('active'));
    rightCurrencyNames.forEach(n => n.classList.remove('active'));
    switch (myCurrencyIndex) {
      case 0:
        rub.classList.add('active');
        greyTextCurrencyChange(greyLeftText, 'RUB');
        break;
      case 1:
        usd.classList.add('active');
        greyTextCurrencyChange(greyLeftText, 'USD');
        break;
      case 2:
        eur.classList.add('active');
        greyTextCurrencyChange(greyLeftText, 'EUR');
        break;
    };
    switch (otherCurrencyIndex) {
      case 0:
        oRub.classList.add('active');
        greyTextCurrencyChange(greyRightText, 'RUB');
        break;
      case 1:
        oUsd.classList.add('active');
        greyTextCurrencyChange(greyRightText, 'USD');
        break;
      case 2:
        oEur.classList.add('active');
        greyTextCurrencyChange(greyRightText, 'EUR');
        break;
    }
  }
};
// серый текст наименование валюты
const greyLeftText = document.querySelectorAll('.grey-left');
const greyRightText = document.querySelectorAll('.grey-right');

//меняет валюту серого текста 
function greyTextCurrencyChange(which, onWhat) {
  which.forEach(n => n.textContent = onWhat);
};

//серый текст величина валюты
const greyLeftCurrency = document.getElementById('grey-left-currency');
const greyRightCurrency = document.getElementById('grey-right-currency');

//меняет пересчёт валюты по умолчанию
function valueation(whichCurrency, leftOrRight) {
  leftOrRight === 1 ? valueLeft = whichCurrency : valueRight = whichCurrency;
  console.log(valueLeft);
};
//добавить эту функцию везде, где меняется валюта 
function greyCurrencyChange() {
  greyLeftCurrency.textContent = valueRight;
  greyRightCurrency.textContent = 1/valueRight;
  console.log('поменял серые')
};
