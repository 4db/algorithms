/*
 * @param {array} arr
 * @param {string|int} key
 * @param {string|int} secondKey
 */
function swap(arr, key, secondKey) {
    var temp = arr[key];
    arr[key] = arr[secondKey];
    arr[secondKey] = temp;
}

/*
 * @param {array} arr
 * @param {integer} left
 * @param {integer} right
 */
function getPivot(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];

    while(left <= right) {
        while(arr[left] < pivot) {
            left++;
        }

        while(arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

/*
 * @param {array} arr
 * @param {array} left
 * @param {array} right
 */
function quickSort(arr, left, right) {

    var index;
    if (arr.length <= 1) {
        return arr;
    }

    left  = left === undefined ? 0 : left;
    right = right === undefined ? arr.length - 1 : right;
    index = getPivot(arr, left, right);
    if (left < index - 1) {
        quickSort(arr, left, index - 1);
    }

    if (index < right) {
        quickSort(arr, index, right);
    }

    return arr;
}

/*
 * @param {string} desc
 * @param {void} input
 * @param {void} expect
 */
function it(desc, input, expect) {
	console.log(desc);
	console.log(input == expect ? 'PASSED' : 'FAIL');
}

it ('should sort integer', quickSort([5,4,3,2,1]).join(''), [1,2,3,4,5].join(''));
it ('should sort negative integer and 0', quickSort([1,2,3,-1,0]).join(''), [-1,0,1,2,3].join(''));
it ('should sort negative chars', quickSort(['c','b','a']).join(''), ['a','b','c'].join(''));
