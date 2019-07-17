/* 
 * 28. Implement strStr()
 * Return the index of the first occurrence 
 * of needle in haystack, or -1 if needle is not part of haystack. 
 * @param {string} str
 * @param {string} needle
 * @return {number}
 */
function strStr(str, needle) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === needle[0]) {
      for (var k = 0; k < needle.length; k++) {
        if (str[i+k] !== needle[k]) {
          break;
        }
      }
      if (k === needle.length - 1) {
        return i - 1;
      }
    }
  }
  return needle === '' ? 0 : -1;
}

console.log('It should return 2', strStr('hello', 'll'), strStr('hello', 'll') === 2)
console.log('It should return -1', strStr('aaaaa', 'bla'), strStr('hello', 'll') === 2)
console.log('It should return 0', strStr('some some', '') === 0)
