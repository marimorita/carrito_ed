let numberElement = document.getElementById("number");
let number = 0;

function sumar() {
  number++;
  numberElement.textContent = number;
}

function restar() {
  number--;
  numberElement.textContent = number;
}