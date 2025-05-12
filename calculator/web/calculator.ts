function calculate(operator: string): void {
  const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
  const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
  let result: number;

  if (isNaN(num1) || isNaN(num2)) {
    displayResult("Invalid input");
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : NaN;
      break;
    default:
      displayResult("Unknown operation");
      return;
  }

  displayResult(result.toString());
}

function displayResult(value: string): void {
  const resultElement = document.getElementById('result');
  if (resultElement) resultElement.textContent = `Result: ${value}`;
}
