function convertTreeToArr(tree) {
  const arr = [];
  const queue = [];
  queue.push(tree);

  while(queue.length) {
    const obj = queue.shift();
    for (let k in obj) {
      if (typeof obj[k] === 'object') {
        queue.push(obj[k]);
      }
      else {
        arr.push(obj[k]);
      }
    }
  }
  return arr;
}

console.log('It should return [1,2,3,4,5,6,7,8]',
convertTreeToArr({
  a : 1,
  b : 2,
  c : {
    a : 3,
    b : 4,
    c : 5,
    d : 6,
    e : {
      a : 7,
      b : 8
    }
  }
}).join('') === [1,2,3,4,5,6,7,8].join('') ? 'PASS' : 'FAIL');
