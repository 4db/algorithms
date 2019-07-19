/*
 * Check Permutation: Given two strings, write a method to decide 
 * if one is a permutation of the other.
 */

/*
 * We will assume for this problem that the comparison is case 
 * sensitive and whitespace is significant. So, "god   " is different from "dog".
 *
 * Time Complexity O(N log(N) / N2 (For Quick Sort worse case))
 * Space Complexity TradeOff: Quick Sort O(log(N)) or Merge Sort O(N)
 *
 * @param string str1
 * @param string str2
 * @return boolean
 */
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');
  return str1 === str2;
}

(() => {
  const test = 'Test isPermutation ';
  const it = ((description, str1, str2, expect) => {
    console.log(
      test + description + ': ',
        isPermutation(str1, str2) === expect 
        ? 
        'PASS'
        : 'FAIL'
    );
  });
  it('should return true for permutations combination', 'god', 'dog', true);
  it('should return false for not permutations combination', 'test', 'asdf', false);
  it('should return true for permutations combination with upper Chars', 'CiViC', 'civic', true);
  it('should return false for not permutations combination with upper Chars', 'asdfAsd', 'FAdfAsd', false);
})();

/*
 * For ASCII characters set, only 128 unique characters.
 *
 * Time Complexity O(3N -> N)
 * Space Complexity O(256 -> 128 -> 1)
 * In this example used only ABC set O(26 -> 1)
 *
 * @param string str
 * @return boolean
 */
function isPermutationTradeOff(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // assume only ABC characters set
  let memo = {};
  'abcdefghijklmnopqrstuvwxyz'.split('').map(c => memo[c] = 0);

  for (let i = 0; i < str1.length; i++) {
    const ch = str1[i].toLowerCase();
    memo[ch]++;
  }
  for (let i = 0; i < str2.length; i++) {
    const ch = str2[i].toLowerCase();
    if (memo[ch] === 0) {
      return false;
    }
    memo[ch]--;
  }
  for (let ch in memo) {
    if (memo[ch] !== 0) {
      return false;
    }
  }
  return true;
}

(() => {
  const test = 'Test isPermutationTradeOff ';
  const it = ((description, str1, str2, expect) => {
    console.log(
      test + description + ': ',
        isPermutationTradeOff(str1, str2) === expect 
        ?
        'PASS'
        : 'FAIL'
    );
  });
  it('should return true for permutations combination', 'god', 'dog', true);
  it('should return false for not permutations combination', 'test', 'asdf', false);
  it('should return true for permutations combination with upper Chars', 'CiViC', 'civic', true);
  it('should return false for not permutations combination with upper Chars', 'asdfAsd', 'FAdfAsd', false);
})();