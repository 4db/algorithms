/* 839. Similar String Groups
 * Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.
 */
/**
 * @param {string[]} A
 * @return {number}
 */
function numSimilarGroups(A) {
  if ((new Set(A)).size === 1) {
	  return 1;
  }
  if (A.length < 2) {
    return A.length;
  }
  
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == null) {
      continue;
    }
    const str = A[i];
    A[i] = null;
    res++;
    dfs(A,str);
  }
  return res;
}

function dfs(arr, str) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    }
    // both string str and arr[i] belong in same group
    if (helper(str,arr[i])) {
      const s = arr[i];
      arr[i] = null;
      dfs(arr,s);
    }
  }
}

function helper(s,t) {
  let res = 0;
  let i = 0;
  while (res <= 2 && i < s.length) {
    if (s[i] !== t[i]) {
      res++;
    }
    i++;
  }
  return res === 2;
}


console.log('It should return 2', numSimilarGroups(["tars","rats","arts","star"]), numSimilarGroups(["tars","rats","arts","star"]) === 2 ? 'PASS' : 'FAIL');
console.log('It should return 1', numSimilarGroups(["aaa","aaa","aaa","aaa"]), numSimilarGroups(["aaa","aaa","aaa","aaa"]) === 1 ? 'PASS' : 'FAIL');
