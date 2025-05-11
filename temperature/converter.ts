function convert(): void {
  const input = document.getElementById("tempInput") as HTMLInputElement;
  const result = document.getElementById("result") as HTMLElement;

  const celsius = parseFloat(input.value);
  if (isNaN(celsius)) {
    result.textContent = "Invalid input";
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  result.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

document.getElementById("convertButton")?.addEventListener("click", convert);
