function isEven(number) {
  if (number < 0) return isEven(-number);
  if (number < 2) return !number;
  return isEven(number - 2);
}

function pascal(row, col) {
  // Write a procedure that computes the elements of Pascal's triangle by means of a recursive process.
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1
  //
  // pascal(4, 2)
  // // → 6
}

function sqrt(x) {
  // Square roots by Newton's method http://en.wikipedia.org/wiki/Newton%27s_method
  // Also you can look at the problem description in SICP[1.1.7] http://newstar.rinet.ru/~goga/sicp/sicp.pdf
  // You should write a function that takes a number and computes square root
  // You can build solution based on functions structure defined below or you can make up your own
}

function sqrtIter(guess, x) {
}

function improve(guess, x) {
}

function average(x, y) {
}

function isGoodEnough(guess, x) {
}

function square(x) {
}

module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
