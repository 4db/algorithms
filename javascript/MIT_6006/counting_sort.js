/*
 * O(n+k) - Time Complexity
 * O(n+k) - Space complexity (for count var storage)
 */
function countingSort(arr, min, max) {
  const count = [];

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let j = 0;
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      count[i]--;
      arr[j++] = i;
    }
  }
 return arr;
}

console.log(countingSort([3, 0, 2, 5, 4, 1], 0, 5));
console.log(countingSort([1,3,3,44,5,5,6,6,7,7,4,2,3,4,0,5,1,33,43], 0, 43));

/*
 * O(n+2k) - Time Complexity
 * O(n+k) - Space complexity (for count var storage)
 */
function sortByDistinctCollection(arr, disc) {
  // find min and max in distinct
  let min = disc[0];
  let max = disc[0];

  // If disc not sorted
  disc.map(val => {
    if (val < min) {
      min = val;
    }
    if (val > max) {
      max = val;
    }
  });
  return countingSort(arr, min, max);
}

console.log(sortByDistinctCollection([3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,999], [3,2,1,999]));
