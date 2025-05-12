function calculate(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
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
function displayResult(value) {
    var resultElement = document.getElementById('result');
    if (resultElement)
        resultElement.textContent = "Result: ".concat(value);
}
