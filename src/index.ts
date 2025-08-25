const mainDisplay = document.querySelector(
  '#main-display'
) as HTMLParagraphElement;
const clearBtn = document.querySelector<HTMLButtonElement>('[data-clear]');
const numberBtn = document.querySelectorAll<HTMLButtonElement>('[data-number]');
const operandBtn =
  document.querySelectorAll<HTMLButtonElement>('[data-operation]');
const equalBtn = document.querySelector<HTMLButtonElement>('[data-equals]');
const plusMinusBtn =
  document.querySelector<HTMLButtonElement>('[data-plusMinus]');

function calculate() {}
