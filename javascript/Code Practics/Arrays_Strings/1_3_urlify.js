/*
 * URLify: Write a method to replace all spaces in a string with 
 *'%20: You may assume that the string has sufficient space at the end
 * to hold the additional characters, and that you are given the "true"
 * length of the string. 
 */

/*
 * Time Complexity O(N)
 * Space Complexity O(N)
 *
 * @param string str
 * @return string
 */
function URLify(str) {
  return str.trim().split(/\s+/).join('%20');
}

(() => {
  const test = 'Test URLify ';
  const it = ((description, input, expect) => {
    console.log(
      test + description + ': ',
        URLify(input) === expect 
        ? 
        'PASS'
        : 'FAIL'
    );
  });
  it('should replace spaces and remove characters on the end of string', 'Mr John Smith   ', 'Mr%20John%20Smith');
  it('should replace spaces and remove characters on the start of string', '   Mr John Smith', 'Mr%20John%20Smith');
  it('should replace spaces and remove characters on the middle', '   Mr    John      Smith   ', 'Mr%20John%20Smith');
  it('should return string without changes', 'MrJohnSmith', 'MrJohnSmith');
})();
