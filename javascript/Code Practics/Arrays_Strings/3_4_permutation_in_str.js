/* 567. Permutation in String
 * Given two strings s1 and s2, write a function to return true 
 * if s2 contains the permutation of s1. 
 * In other words, one of the first string's 
 * permutations is the substring of the second string.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  let len1 = s1.length, len2 = s2.length;
  if (len1 > len2) {
    return false;
  }

  let count = {};
  'abcdefghijklmnopqrstuvwxyz'.split('').map(el => count[el] = 0);

  for (let i = 0; i < len1; i++) {
    count[s1[i]]++;
    count[s2[i]]--;
  }

  if (allZero(count)) {
    return true;
  }

  for (let i = len1; i < len2; i++) {
    count[s2[i]]--;
    count[s2[i- len1]]++;
    if (allZero(count)) {
      return true;
    }
  }
  return false;
}

/*
 * @param {array} count
 * @return {boolean}
 */
function allZero(count) {
  for (c in count) {
    if (count[c] !== 0) {
      return false;
    }
  }
  return true;
}

console.log('It should return true', checkInclusion('ab', 'ab') ? 'PASS' : 'FAIL');
console.log('It should return true', checkInclusion('ab', 'eidbaooo')  ? 'PASS' : 'FAIL');
console.log('It should return false', !checkInclusion('hello', 'ooolleoooleh') ? 'PASS' : 'FAIL');
