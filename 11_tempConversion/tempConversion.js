const convertToCelsius = function(fah) {
  let celsius = (fah-32) * (5/9);
  let celsiusRound = Math.round(celsius * 10)/10;
  return celsiusRound;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  let fahrenheitRound = Math.round(fahrenheit * 10)/10;
  return fahrenheitRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
