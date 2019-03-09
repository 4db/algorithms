/* 785. Is Graph Bipartite? Given an undirected graph, return true if and only if it is bipartite. */
/**
 * @param {graph[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!dfs(graph, colors, u, 0)) {
      return false;
    }
  }

  return true;
}

/**
 * @param {graph[][]} graph
 * @param {map} colors
 * @param {number} u
 * @param {string} color
 * @return {boolean}
 */
function dfs(graph, colors, u, color) {
  if (!colors.has(u)) {
    colors.set(u, color);

    for (const v of graph[u]) {
      if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
        return false;
      }
    }
  }

  return true;
}

console.log('It should return true', isBipartite([[1,3],[0,2],[1,3],[0,2]]) === true ? 'PASS' : 'FAIL');


console.log('It should return false', isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]) === false ? 'PASS' : 'FAIL');
