// Fibonacci numbers:0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
// T(n) = T(n-1) + T(n-2) + O(1) - Exponential time complexity
function fibonacciRecursion(n) {
	return n < 2 ? n : fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
}

function fibonacciLoop(n) {
	var a = 1;
	var b = 0;
	while (n--) {
		[a, b] = [b, b + a];
	}
	return b;
}

// O(n) subproblems * O(1) ignore recursion = O(n)
var memo = {}
function fibonacciRecursionMemoize(n) {
    if (!memo[n] || n < 2) {
       return n < 2 ? n : memo[n];
    }
    var fibonacci = fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
    memo[n] = fibonacci;
    return fibonacci;
}
