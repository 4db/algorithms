/**
 * https://leetcode.com/problems/longest-absolute-file-path/
 * We are interested in finding the longest (number of characters) absolute path to a
 * file within our file system. For example, in the second example above, the longest 
 * absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32
 * (not including the double quotes).
 *
 * Time complexity required: O(n) where n is the size of the input string.
 *
 * @param {string} input
 * @return {number}
 */
function lengthLongestPath(input) {
  const stack = [];
  return input.split('\n').reduce((max, p) => {
    const level = p.lastIndexOf('\t') + 1;
    stack[level] = p.length - level + (level ? stack[level - 1] : 0);
    return p.indexOf('.') === -1 ? max : Math.max(max, stack[level] + level);
  }, 0);
};

console.log('It should return 20', lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext") === 20 ? 'PASS' : 'FAIL');
