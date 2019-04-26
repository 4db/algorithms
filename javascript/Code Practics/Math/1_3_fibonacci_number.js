/**
 * 509. Fibonacci Number
 * @param {number} N
 * @return {number}
 */
function getFibonacciNumber(N) {
    let arr = [0, 1];
    for (let i = 2; i <= N; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[N];    
}

console.log('It should return 1', getFibonacciNumber(2) === 1 ? 'PASS' : 'FAIL');
console.log('It should return 2', getFibonacciNumber(3) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 3', getFibonacciNumber(4) === 3 ? 'PASS' : 'FAIL');
