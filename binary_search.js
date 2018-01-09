function binarySearch(arr, toSearch) {
    var max    = arr.length - 1;
    var middle = Math.floor(max / 2);
    var min    = 0;

    if (!Number.isInteger(toSearch)) {
        return -1;
    }

    if (arr[max] === toSearch) {
        return max;
    }

    if (arr[min] === toSearch) {
        return min;
    }

    while(max >= min) {
        if (arr[middle] === toSearch) {
            return middle;
        }

        if (arr[middle] > toSearch) {
            max = middle - 1;
        }

        if (arr[middle] < toSearch) {
            min = middle + 1;
        }

        middle = Math.floor((min + max) / 2);
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5], 5));