/*
 * Implement an algorithm to determine if a string has all unique characters. What if 
 * you cannot use additional data structures?
 */

/*
 * For Unicode Characters set, ~1M unique characters.
 *
 * Time Complexity O(N log(N) / N2 (For Quick Sort worse case))
 * Space Complexity  TradeOff:O(log(N)) for Quick Sort and O(N) for Merge Sort
 *
 * @param string str
 * @return boolean
 */
function isUnique(str) {
  let arr = str.toLowerCase().split('').sort();

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return true;
}

/*
 * For ASCII characters set, only 128 unique characters
 *
 * Time Complexity O(128 -> 1)
 * Space Complexity O(N)
 *
 * @param string str
 * @return boolean
 */
function isUniqueTradeOff(str) {
  let hash = new Array(128);
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i].toLowerCase()] === true) {
      return false;
    }
    hash[str[i].toLowerCase()] = true;
  }
  return true;
}

(() => {
  const test = 'Test';
  const it = ((description, input, expect) => {
    console.log(test + ' isUnique ' + description + ':',
      isUnique(input) === expect 
      ? 
      ' PASS'
      : ' FAIL');
    console.log(test + ' isUniqueTradeOff ' + description + ':',
      isUniqueTradeOff(input) === expect 
      ? 
      ' PASS'
      : ' FAIL');
  });
  it('should return true for unique string', 'asdf', true);
  it('should return false for not unique string', 'asdfa', false);
  it('should return true for unique string with upper chars', 'aSDF', true);
  it('should return false for not unique string with upper chars', 'ASdfA', false);
})();
