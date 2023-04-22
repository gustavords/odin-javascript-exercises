const sumAll = function (start, end) {
  let sum = 0,
    a = start,
    b = end;

  if (a < 0 || b < 0 || typeof a !== `number` || typeof b !== `number`) {
    return `ERROR`;
  }
  if (start > end) {
    a = end;
    b = start;
  }
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
