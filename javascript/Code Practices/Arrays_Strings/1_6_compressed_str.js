/*
 * String Compression: Implement a method to perform basic 
 * string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed"string would not become smaller than the
 * original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).
 */

/*
 * Time Complexity O(N)
 * Space Complexity O(N)
 *
 * @param string str
 * @return string
 */
function compressedStr(str) {
  const arr = str.split('');
  let repeat = 1;
  return arr.map((char,i) => {
    if (arr[i + 1] === char) {
      repeat++;
      if (repeat > 2) {
        char = '';
      }
    }
    else {
        if (repeat > 1) {
          char = repeat;
        }
        repeat = 1;

    }
    return char;
  }).join('');
  arr.join('');
}

(() => {
  const test = 'Test compressedStr ';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ',
      compressedStr(input) === expect ? 'PASS' : 'FAIL'
    );
  });
  it('should replace two repeated characters', 'aabc', 'a2bc');
  it('should replace three repeated characters', 'aabbbc', 'a2b3c');
  it('should replace four repeated characters', 'aabbbccccq', 'a2b3c4q');
  it('should replace five repeated characters', 'abcqqqqqfdgaa', 'abcq5fdga2');
  it('should not replace no repeated characters', 'abcqasdgb', 'abcqasdgb');
})();