const buttons = document.querySelector(".contents");
const display = document.querySelector(".result");

function calc(op1, op, op2) {
  let result = 0;
  switch (op) {
    case "+":
      result = Number(op1) + Number(op2);
      break;
    case "-":
      result = Number(op1) - Number(op2);
      break;
    case "×":
      result = Number(op1) * Number(op2);
      break;
    case "÷":
      result = Number(op1) / Number(op2);
      break;
  }
  if (!Number.isInteger(result)) return result.toFixed(2);
  return result;
}

let pre_val = "";
let pre_key = "";
let pre_op = "";

const reset = () => {
  pre_val = "";
  pre_op = "";
  pre_key = "";
};

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const Type = target.className;
  const Content = target.innerText;

  if (Type === "number") {
    if (display.innerText === "0" || pre_key !== Type) {
      display.innerText = Content;
    } else if (pre_key === Type) {
      display.innerText += Content;
    }
    pre_key = Type;
  } else if (Type === "operator") {
    if (Content === "=") {
      if (pre_op === "") return;
      display.innerText = String(calc(pre_val, pre_op, display.innerText));
      reset();
    } else {
      if (pre_val === display.innerText) return;
      if (pre_op !== "")
        display.innerText = String(calc(pre_val, pre_op, display.innerText));
      pre_val = display.innerText;
      pre_op = Content;
    }
    pre_key = Type;
  } else {
    display.innerText = "0";
    reset();
  }
});
