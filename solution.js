function isEven(number) {
  if (number < 0) return isEven(-number);
  if (number < 2) return !number;
  return isEven(number - 2);
}

function pascal(row, col) {
  if (col === 0 || row === col) {
    return 1
  } else if (row >= col) {
    return pascal(row - 1, col - 1) + pascal(row - 1, col)
  }
}

function sqrt(x) {
  var old_guess, guess = 1;
  do {
    old_guess = guess, guess = (old_guess + x/old_guess)/2;
  } while (Math.abs(old_guess - guess) >= 1e-3)
  return guess;
}

module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
