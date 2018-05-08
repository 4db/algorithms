function countingSort(arr, min, max) {
    var count = [];
 
    for (var i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (var i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    var z = 0;
    for (var i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
};
console.log(countingSort([3, 0, 2, 5, 4, 1], 0, 5));
console.log(countingSort([1,3,3,44,5,5,6,6,7,7,4,2,3,4,0,5,1,33,43], 0, 43));
