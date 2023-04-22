const convertToCelsius = function (fahr) {
  let celc = (fahr - 32) * (5 / 9);
  return Math.round(celc * 10) / 10;
};

const convertToFahrenheit = function (celc) {
  let fahr = (celc * (9 / 5)) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
