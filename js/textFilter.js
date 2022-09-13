let regex = /[^0-9.]/g;

let amount = document.querySelector('.amount');

amount.oninput = function () {
  this.value = this.value.replace(regex, '');    //попробовать сделать общую функцию
}

let recalculation = document.querySelector('.recalculation');

recalculation.oninput = function () {
  this.value = this.value.replace(regex, '');
}