console.clear();

let resultDOM = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const equal = document.querySelector(".equals");

let current = "";
let secondNum = "";
let operator = "";
let result = "";

// sutvarkyti kad pirmas butu skaicius


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;

    if (["+", "-", "*", "/"].includes(value)) {
      if (!operator) {
        operator = value;
        result += value;
      }
    } else if (operator === "") {
      current += value;
      result += value;
    } else {
      secondNum += value;
      result += value;
    }
    resultDOM.innerHTML = result;
  });
});

equal.addEventListener("click", () => {
  result = calculate(current, operator, secondNum);
  current = result;
  operator = "";
  secondNum = "";
  resultDOM.innerHTML = current;
});

clear.addEventListener("click", () => {
  current = "";
  secondNum = "";
  operator = "";
  result = "";
  resultDOM.innerHTML = "0";
  console.clear();
});

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  // if (num2 === 0) return 0;
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
