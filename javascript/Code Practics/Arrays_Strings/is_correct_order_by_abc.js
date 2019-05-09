function isCorrectOrderByAbc(arr, abc) {
  const maxL = arr.reduce((res, val) => {
    return Math.max(res, !isNaN(val) ? parseInt(val) : val.length);
  }, 0);

  const checkOrder = (value, x) => {
    if (!value[x] || !value[x + 1]) {
      return true;
    }
    return abc.indexOf(value[x]) < abc.indexOf(value[x + 1]);
  }

  const recursionCheck = (k, max) => {
    if (k === max) {
      return true;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!checkOrder(arr[i], k)) {
        return false;
      }
    }
    k = k + 1;
    return recursionCheck(k, max);
  };
  return recursionCheck(0, maxL);
}

console.log('It should return false', isCorrectOrderByAbc(['abc','cdefz', 'aoaprq'], 
'abcdefghijklmnopqrstuvwxyz'));

console.log('It should return true', isCorrectOrderByAbc(['abc','cdefz', 'aopqr'], 
'abcdefghijklmnopqrstuvwxyz'));

console.log('It should return true for custom abc', isCorrectOrderByAbc(['otaws','ots', 'aws'], 
'otqaws'));

console.log('It should return false for custom fedcba', isCorrectOrderByAbc(['cbde','bdae', 'bbdfd'], 
'fedcba'));
