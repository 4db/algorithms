/* 
 * 854. K-Similar Strings
 * Strings A and B are K-similar (for some non-negative integer K) if we can
 * swap the positions of two letters in A exactly K times so that the resulting string equals B.
 * Given two anagrams A and B, return the smallest K for which A and B are K-similar.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
function kSimilarity(A, B) {
  var a = Array.from(A);
  var b = Array.from(B);
  const N = Infinity;

  const dfs = function dfs(p, a, b) {
    if (p == a.length) {
     return 0;
    }

    if (a[p] === b[p]) {
      return dfs(p+1, a, b);
    }

    let ans = N;

    for (let i = p+1; i<a.length; i++) {
      if (a[i] === b[p]) {
        [a[i], a[p]] = [a[p], a[i]];
        ans = Math.min(ans, dfs(p+1,a,b)+1);
        [a[i],a[p]] = [a[p],a[i]];
        if (b[i] === a[p]) {
          break;   
        }
      }
    }
    return ans;
  }
  return dfs(0, a, b);
}

console.log('It should return 1', kSimilarity('ab', 'ba') === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', kSimilarity('abc', 'bca') === 2 ? 'PASS' : 'FAIL');
console.log('It should return 2', kSimilarity('abac', 'baca') === 2 ? 'PASS' : 'FAIL');
console.log('It should return 2', kSimilarity('aabc', 'abca') === 2 ? 'PASS' : 'FAIL');
