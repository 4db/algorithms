/* 
 * 67. Add Binary
 * Given two binary strings, return their sum (also a binary string).
 *
 * @param {string} a
 * @param {string} b 
 * @return {string}
 *
 */
function addBinary(a, b) {
  let out = '';
  let i = a.length - 1;
  let k = b.length - 1;
  let calc = 0;
  while (i >= 0 || k >= 0 || calc > 0) {
    calc += i >= 0 ? parseInt(a[i--]) : 0;
    calc += k >= 0 ? parseInt(b[k--]) : 0;
    out = calc % 2 + out;
    calc = parseInt(calc / 2);
  }
  return out;
};

console.log('It should return 100', addBinary('11', '1') === '100');
console.log('It should return 10101', addBinary('1010', '1011') === '10101');
