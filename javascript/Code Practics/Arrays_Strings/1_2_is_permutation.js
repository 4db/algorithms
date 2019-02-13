/*
 * Check Permutation: Given two strings, write a method to decide 
 * if one is a permutation of the other.
 */

/*
 * We will assume for this problem that the comparison is case 
 * sensitive and whitespace is significant. So, "god   " is different from "dog".
 *
 * Time Complexity O(N log(N))
 * Space Complexity TradeOff: Quick Sort O(log(N)) or Merge SortO(N)
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

/*
 * TODO
 * For ASCII characters set, only 128 unique characters
 *
 * Time Complexity O(128 -> 1)
 * Space Complexity O(N)
 *
 * @param string str
 * @return boolean
 */
function isPermutationTradeOff(str1, str2) {
  return true;
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
