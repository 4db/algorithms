/*
 * One Away: There are three types of edits that can be performed
 * on strings: insert a character, remove a character, or replace
 * a character. Given two strings, write a function to check if 
 * they are one edit (or zero edits) away.
 */

/*
 * Time Complexity O(N)
 * Space Complexity O(N)
 *
 * @param string input
 * @param string edit
 * @return boolean
 */
function oneEditAway(input, edit) {
  if (input.length - edit.length > 1) {
    return false;
  }
  if (input.length != edit.length) {
    edit = edit[0] !== input[0] ? ' ' + edit : edit + ' ';
  }

  let mistake = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== edit[i]) {
      mistake++;
    }
    if (mistake > 2) {
      return false;
    }
  }
  return mistake > 0;
}

(() => {
  const test = 'Test oneEditAway ';
  const it = ((description, input, edit, expect) => {
    console.log(
      test + description + ': ',
      oneEditAway(input, edit) === expect ? 'PASS' : 'FAIL'
    );
  });
  it('should return true for last character edit', 'pale', 'pal', true);
  it('should return true for first character edit', 'pale', 'ale', true);
  it('should return true for mid character edit', 'pale', 'p le', true);
  it('should return false for no edit', 'pale', 'pale', false);
  it('should return true for two edit', 'pale', 'bae', false);
})();