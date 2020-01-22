function sortByOddEvenByFor(arr) {

    // Left for even
    let left = 0;
    // Right for odd
    let right = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        // Keep looking why not found odd
        if (isEven(arr[left])) {
        	left++;
        }

        // Keep looking why not found even
        if (!isEven(arr[right])) {
        	right--;
        }

        // If found even and odd => swap
        if (!isEven(arr[left]) && isEven(arr[right])) {
        	arr = swap(arr, left, right);
        }
    }
    return arr;
}

function sortByOddEvenByWhile(arr) {

    // Left for even
    let left = 0;
    // Right for odd
    let right = arr.length - 1;

    while (left < arr.length || right > 0) {
        // Keep looking why not found odd
        if (isEven(arr[left])) {
        	left++;
        }

        // Keep looking why not found even
        if (!isEven(arr[right])) {
        	right--;
        }

        // If found even and odd => swap
        if (!isEven(arr[left]) && isEven(arr[right])) {
        	arr = swap(arr, left, right);
        }
    }
    return arr;
}

function isEven(n) {
    return n % 2 === 0 ? true : false;
}

function swap(arr, l, r) {
    const t = arr[l];
    arr[l] = arr[r];
    arr[r] = t;
    return arr;
}

console.log('It should return [ 1, 5, 3, 4, 2, 6 ]', sortByOddEvenByFor([1,2,3,4,5,6]));
console.log('It should return [ 1, 5, 3, 4, 2, 6 ]', sortByOddEvenByWhile([1,2,3,4,5,6]));
