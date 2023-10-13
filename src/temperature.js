
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}


const fahrenheitTemperature = 77; // Температура в градусах Фаренгейта
const convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);
console.log(fahrenheitTemperature + "F " + convertedToCelsius.toFixed(1) + "C");