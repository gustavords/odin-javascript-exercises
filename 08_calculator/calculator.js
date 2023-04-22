const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(x => { sum += x;})
	return sum;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(x => total *= x);
  return total;
};

const power = function(a,b) {
	//return Math.pow(a, b);
	
	//or
	
	let pow = 1
	while(b > 0){
	  pow *= a;
	  b--;
	}
	return pow;
	
};

const factorial = function(n) {
	let fac = 1
	while(n > 0){
	  fac *= n;
	  n--;
	}
	return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
