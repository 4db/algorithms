/*
 * 66. Plus One
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *
 * @param {array} digits
 * @return {array}
 */
function plusOne(digits) {
  const last = digits.length - 1;
  if (digits[last] === 9) {
  digits[last] = 1;
    digits.push(1);
  }
  else {
    digits[last] = digits[last] + 1;
  }
  return digits;
}

console.log('It should return 124', JSON.stringify(plusOne([1,2,3])) === JSON.stringify([1,2,4]));
console.log('It should return 4321', JSON.stringify(plusOne([4,3,2,1])) === JSON.stringify([4,3,2,2])); 
