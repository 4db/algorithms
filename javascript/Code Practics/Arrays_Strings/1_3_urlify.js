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
    const it = ((description, input, expect) => {
        console.log(
            description,
            URLify(input) === expect 
          ? 
          'PASS'
          : 'FAIL'
        );
    });
    it('Test URLify with on the end', 'Mr John Smith   ', 'Mr%20John%20Smith');
    it('Test URLify with on the front', '   Mr John Smith', 'Mr%20John%20Smith');
    it('Test URLify with spaces', '   Mr    John      Smith   ', 'Mr%20John%20Smith');
    it('Test URLify without spaces', 'MrJohnSmith', 'MrJohnSmith');
})();
