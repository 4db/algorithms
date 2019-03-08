/* 207. Course Schedule. There are a total of n courses you have to take,
 * labeled from 0 to n-1.Some courses may have prerequisites, 
 * for example to take course 0 you have to first take course 1,
 * which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, 
 * is it possible for you to finish all courses?
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = [...Array(numCourses)].map(r => []);
  
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }
  
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;
  
  function dfs(v) {
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;
    
    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}

console.log('It should return true', canFinish(2, [[1,0]]) === true ? 'PASS' : 'FAIL');
