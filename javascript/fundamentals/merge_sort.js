function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = parseInt(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const response = [];
  while (left.length && right.length) {
    response.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  while(left.length) {
    response.push(left.shift());
  }

  while(right.length) {
    response.push(right.shift());
  }
  return response;
}
