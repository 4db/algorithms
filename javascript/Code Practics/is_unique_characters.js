/*
 * Implement an algorithm to determine if a string has all unique characters. What if 
 * you cannot use additional data structures?
 */

function isUnique(str) {
    // Split time complexity O(N), Quick sort O(n log(n))
    // Space complexity O(log(n))
    let arr = str.toLowerCase().split('').sort();
    // O(N)
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }
    return true;
}

(() => {
    const it = ((description, input, expect) => {
        console.log(description, isUnique(input) === expect ? ' PASS' : ' FAIL');
    });
    it('Test simple unique string', 'asdf', true);
    it('Test simple not unique string', 'asdfa', false);
    it('Test simple unique string with upper Chars', 'aSDF', true);
    it('Test simple not unique string with upper Chars', 'ASdfA', false);
})();
