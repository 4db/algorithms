function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = parseInt(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, arr.length);

    return (function merge(left, right) {
        var res = [];
        while(left.length && right.length) {
            res.push(left[0] < right[0] ? left.shift() : right.shift());
        }

        while(left.length) {
            res.push(left.shift());
        }

        while(right.length) {
            res.push(right.shift());
        }

        return res;
    })(mergeSort(left), mergeSort(right));
}

[
    '123216443658743695943758432675983768943',
    '000000000111111100000000000000000011111',
    'dfasfjasdfghjsadgfagjshd'
].map(str => console.log(mergeSort(str.split(''))) );

