function convert() {
    var input = document.getElementById("tempInput");
    var result = document.getElementById("result");
    var celsius = parseFloat(input.value);
    if (isNaN(celsius)) {
        result.textContent = "Invalid input";
        return;
    }
    var fahrenheit = (celsius * 9) / 5 + 32;
    result.textContent = "".concat(celsius, "\u00B0C = ").concat(fahrenheit.toFixed(2), "\u00B0F");
}
// make function accessible in HTML
window.convert = convert;
