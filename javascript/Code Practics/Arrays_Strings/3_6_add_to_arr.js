/**
 * 989. Add to Array-Form of Integer
 * For a non-negative integer X, the array-form of X is an array of its digits in left to right order.
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
function addToArrayForm(A, K) {
    K = (K + '').split('');
    let carry = 0;
    let arrIndex = A.length - 1;
    let kIndex = K.length - 1;
    let ret = [];
    while (arrIndex >= 0 || kIndex >= 0 || carry > 0) {
        let cur = carry;
        cur += arrIndex >= 0 ? A[arrIndex] : 0;
        cur += kIndex >= 0 ? Number.parseInt(K[kIndex]) : 0;

        ret.push(cur % 10);
        carry = Math.floor(cur / 10);

        arrIndex -= 1;
        kIndex -= 1;
    }

    return ret.reverse()
};
