function swap(arr, keyA, keyB) {
    var temp = arr[keyA];
    arr[keyA] = arr[keyB];
    arr[keyB] = temp;
};

function heapSort(arr) {
    var arrLen = arr.length;
    var heapRoot = function (arr, i) {
        var max   = i;
        var left  = 2 * i + 1;
        var right = 2 * i + 2;

        if (left < arrLen && arr[left] > arr[max]) {
            max = left;
        }

        if (right < arrLen && arr[right] > arr[max]) {
            max = right;
        }

        if (max != i) {
            swap(arr, i, max);
            heapRoot(arr, max);
        }
    };

    for (var i = Math.floor(arrLen / 2); i >= 0; i -= 1) {
        heapRoot(arr, i);
    }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrLen--;
        heapRoot(arr, 0);
    }
    return arr;
};
console.log(heapSort([3, 0, 2, 5, -1, 4, 1]));
console.log(heapSort([ 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 13 ]));
console.log(heapSort('dahsjfgdshjavbadjhvkbhjdakjh14768326543892504dsaf23'.split('')));