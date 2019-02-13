/*
 * Given a string, write a function to check if it is a permutation
 * of a palindrome. A palindrome is a word or phrase that is the same
 * forwards and backwards. A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 *
 * For example, we know tactcoapapa is a permutation of a palindrome because 
 * it has two Ts, four As, two Cs, two Ps, and one O. 
 * That a would be the center of all possible palindromes.
 */

/*
 * Time Complexity O(N)
 * Space Complexity O(N)
 *
 * @param string str
 * @return boolean
 */
function isPermutationOfPalindrome(str) {
  const arr = str.trim().split('').sort();
  // Check that no more than one character has an odd count.
  let foundOdd = false;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i] && arr[i + 1] && arr[i + 1] !== arr[i]) {
      if (foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }
  return true;
}

(() => {
  const test = 'Test isPermutationOfPalindrome ';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ',
      isPermutationOfPalindrome(input) === expect ? 'PASS' : 'FAIL'
    );
  });
  it('should return true for permutation of palindrome', 'tactcoapapa', true);
  it('should return false for not permutation of palindrome', 'qwe rty ui', false);
  it('should return true for short string(2x) and permutation of palindrome', 'aa', true);
  it('should return false for short string(2x) and not permutation of palindrome', 'ab', true);
  it('should return true for short string(3x) and permutation of palindrome', 'aba', true);
  it('should return false for short string(4x) not permutation of palindrome', 'abcd', false);
  it('should return true for odd string and permutation of palindrome', 'civic', true);
})();