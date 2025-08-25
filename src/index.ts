
const resultDisplay = document.querySelector<HTMLParagraphElement>('#result-display')!;
const equationDisplay = document.querySelector<HTMLParagraphElement>('#equation-display')!;
const clearBtn = document.querySelector<HTMLButtonElement>('[data-clear]');
const numberBtn = document.querySelectorAll<HTMLButtonElement>('[data-number]');
const operandBtn = document.querySelectorAll<HTMLButtonElement>('[data-operation]');
const equalBtn = document.querySelector<HTMLButtonElement>('[data-equals]');
const plusMinusBtn = document.querySelector<HTMLButtonElement>('[data-plusMinus]');

let display: Array<string> = [];
let prevEqu: Array<string> = [];

clearBtn?.addEventListener('click', clear);

// iterate over the node list
numberBtn?.forEach((btn) => {
  btn.addEventListener('click', () => {
    appendNumber(btn);
  });
});

operandBtn?.forEach((btn) => {
  btn.addEventListener('click', () => {
    appendNumber(btn);
  });
});

// function to clear the display
function clear(): void {
  display = [];
  prevEqu = [];
  const prevdis = prevEqu.join('');
  equationDisplay.textContent = prevdis;

  appendDisplay();
}
// remove the last entered character on the calculator
function deleteNum(): void {
  display.pop();
  appendDisplay();
}

// to display number on main screen
function appendNumber(btn: HTMLButtonElement): void {
  display.push(btn.textContent);
  appendDisplay();
}

// to select an operation
function selectOperation(btn: HTMLButtonElement): void {
  display.push(btn.textContent);
  appendDisplay();
}

// append  main display
function appendDisplay() {
  const strDis = display.join('');
  resultDisplay.textContent = strDis;
}

function calculate(display: string) {
  const equation = eval(display);
  const result: string = (resultDisplay.textContent = equation);
  return result;
}

equalBtn?.addEventListener('click', () => {
  const cal = display.join('');
  const res = calculate(cal);
  prevEqu = [...display];
  const prevdis = prevEqu.join('');
  equationDisplay.textContent = prevdis;
  resultDisplay.textContent = res;
});



