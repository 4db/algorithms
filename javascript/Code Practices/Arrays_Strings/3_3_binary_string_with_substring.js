/* 
 * 1023. Binary String With Substrings Representing 1 To N
 *
 * Given a binary string S (a string consisting only of '0' and '1's) and a positive integer N, 
 * return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.
 */
 
/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
function queryString(S, N) {
    for (let i = 1; i <= N; i++) {
        if (!S.includes(i.toString(2))) {
            return false;
        }
    }  
    return true;
}

console.log('It should return true', queryString("0110",3) === true ? 'PASS' : 'FAIL');
