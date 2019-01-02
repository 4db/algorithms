function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = parseInt(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, arr.length);

    return (function merge(left, right) {
        const res = [];
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

function it(desc, input, expect) {
	console.log(desc);
	console.log(input == expect ? 'PASSED' : 'FAIL');
}

it ('should sort integer', mergeSort([5,4,3,2,1]).join(''), [1,2,3,4,5].join(''));
it ('should sort negative integer and 0', mergeSort([1,2,3,-1,0]).join(''), [-1,0,1,2,3].join(''));
it ('should sort negative chars', mergeSort(['c','b','a']).join(''), ['a','b','c'].join(''));
