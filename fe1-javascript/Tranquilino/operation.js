const performOperationButton = document.getElementById("performOperation");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

performOperationButton.addEventListener("click", () => {
  addNum();
  subtractNum();
  multiplyNum();
  divideNum();
});

function addNum() {
  add.innerHTML = parseInt(add.innerHTML) + 2;
}

function subtractNum() {
  subtract.innerHTML = parseInt(subtract.innerHTML) - 2;
}

function multiplyNum() {
  multiply.innerHTML = parseInt(multiply.innerHTML) * 2;
}

function divideNum() {
  divide.innerHTML = parseInt(divide.innerHTML) / 2;
}
