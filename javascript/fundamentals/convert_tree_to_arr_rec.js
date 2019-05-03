function convertTreeToArrRec(tree) {
  let arr = [];

  for (let k in tree) {
    if (typeof tree[k] === 'object') {
      arr = arr.concat(convertTreeToArrRec(tree[k]));
    }
    else {
      arr.push(tree[k]);
    }
  }
  return arr;
}

console.log('It should return [1,2,3,4,5,6,7,8]',
convertTreeToArrRec({
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
