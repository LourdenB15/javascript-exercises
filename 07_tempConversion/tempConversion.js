const convertToCelsius = function (f) {
  const convert = (f - 32) * .5556
  const rounded = Math.round(convert * 10) / 10
  return rounded;
};

const convertToFahrenheit = function (c) {
  const convert = (c * 1.8) + 32;
  const rounded = Math.round(convert * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
