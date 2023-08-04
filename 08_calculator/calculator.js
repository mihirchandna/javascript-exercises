const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum=0;
	for(index=0;index<arr.length;index++)
  {
    sum+=arr[index];
  }
  return sum;
};

const multiply = function(arr) {
  let mul=1;
	for(index=0;index<arr.length;index++)
  {
    mul*=arr[index];
  }
  return mul;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	let res=1;
  for(let i=n;i>1;i--)
  {
    res=res*i;
  }
  return res;
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
