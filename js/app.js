var elHeading = document.querySelector("#heading");
var dollar = 11200;
var yevro = 11500;
var jami = dollar * 500 + dollar * 250 + yevro * 120;
var summa = +prompt("Qancha mablag'ingiz bor?");

if (summa >= jami) {
  elHeading.textContent = "Oq yo'l Jonibek aka!";
} else if (summa < jami) {
  elHeading.textContent = "Jonibek aka uyda o'tiring!";
} else {
  elHeading.textContent = "Raqam kiriting!";
}
