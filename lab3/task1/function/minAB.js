//A solution using if:
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//A solution with a question mark operator '?':
function min(a, b) {
  return a < b ? a : b;
}

//function pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}