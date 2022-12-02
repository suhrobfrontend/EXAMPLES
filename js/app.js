// var elHeading = document.querySelector("#heading");
// var dollar = 11200;
// var yevro = 11500;
// var jami = dollar * 500 + dollar * 250 + yevro * 120;
// var summa = +prompt("Qancha mablag'ingiz bor?");

// if (summa >= jami) {
//   elHeading.textContent = "Oq yo'l Jonibek aka!";
// } else if (summa < jami) {
//   elHeading.textContent = "Jonibek aka uyda o'tiring!";
// } else {
//   elHeading.textContent = "Raqam kiriting!";
// }

// // STUDENT MASHQI
// var elHeading = document.querySelector("#heading");
// var question1 = prompt("Ismingizni kriting:");
// var question2 = +prompt("Balingizni kiriting:");
// var question3 = prompt("Tankangiz bormi?:");

// var hundred = 100;
// var seventy = 70;
// var fourty = 40;

// if (question2 > hundred) {
//   alert("Maksimal 100 ball kiriting");
// } else if (question2 >= seventy) {
//   elHeading.textContent = `Hurmat li ${question1}, sizning balingiz ${question2}, siz o'tdingiz, tabriklaymiz!`;
// } else if (question2 < seventy && question2 >= fourty && question3 == "ha") {
//   elHeading.textContent = `Hurmat li ${question1}, sizning balingiz ${question2}, siz o'tdingiz! O'zingiz ham harakat qiling`;
// } else {
//   elHeading.textContent = `Afsus keyingi safar o'tasiz:(`;
// }

// _________________________

// Currency converter Money Gram
var elForm = document.querySelector("[data-form]");
var elInput = document.querySelector("[data-input]");
var elSelect = document.querySelector("[data-select]");
var elButton = document.querySelector("[data-btn]");
var elHeading = document.querySelector("[data-heading]");
// valutalar
var rub = 181;
var usd = 11257;
var euro = 11830;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elSelect.value === "rub") {
    elHeading.textContent = `taqriban ${(elInput.value / rub).toFixed(
      2
    )} "rubl" pulingiz bor`;
  } else if (elSelect.value === "usd") {
    elHeading.textContent = `taqriban ${(elInput.value / usd).toFixed(
      2
    )} "dollar" pulingiz bor`;
  } else {
    elHeading.textContent = `taqriban ${(elInput.value / euro).toFixed(
      2
    )} "euro" pulingiz bor`;
  }
});
