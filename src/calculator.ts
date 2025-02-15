let currentInput: string = '';
let previousInput: string = '';
let currentOperator: string | null = null;

function updateDisplay(): void {
  const displayElement = document.getElementById('display') as HTMLInputElement;
  if (currentOperator) {
    displayElement.value = previousInput + ' ' + currentOperator + ' ' + currentInput; // Show operator and numbers
  } else {
    displayElement.value = currentInput || '0'; // Show just the number
  }
}

function inputNumber(num: number): void {
  if (currentInput === '0') {
    currentInput = num.toString(); // Prevent leading zeros
  } else {
    currentInput += num.toString();
  }
  updateDisplay();
}

function inputOperator(op: string): void {
  if (currentInput === '') return; // Don't allow operator if there's no input

  if (previousInput !== '') {
    calculateResult(); // Calculate result if there's already a previous input
  }

  currentOperator = op;
  previousInput = currentInput;
  currentInput = ''; // Clear current input for next number
  updateDisplay();
}

function calculateResult(): void {
  if (previousInput === '' || currentInput === '' || currentOperator === null) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  if (isNaN(prev) || isNaN(current)) return;

  let result: number = 0;
  
  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
  }

  currentInput = result.toString();
  currentOperator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay(): void {
  currentInput = '';
  previousInput = '';
  currentOperator = null;
  updateDisplay();
}

// Add Event Listeners for Buttons
document.querySelectorAll('.number').forEach((button) => {
  button.addEventListener('click', () => inputNumber(Number(button.textContent)));
});

document.querySelectorAll('.operator').forEach((button) => {
  button.addEventListener('click', () => inputOperator(button.textContent!));
});

document.getElementById('clear')?.addEventListener('click', clearDisplay);
document.getElementById('equal')?.addEventListener('click', calculateResult);

updateDisplay();
