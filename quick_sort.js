function swap(arr, key, secondKey) {
    var temp = arr[key];
    arr[key] = arr[secondKey];
    arr[secondKey] = temp;
}

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

console.log(quickSort([9,8,6,5,4,3]));