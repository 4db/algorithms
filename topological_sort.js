/*
 * Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, 
 * vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.
 *
 * A DAG G has at least one vertex with in-degree 0 and one vertex with out-degree 0
 *
 */
function topologicalSort(graph) {
  var result  = [];
  var visited = [];
  var temp    = [];

  var topologicalSortRecursion = function (node, visited, temp, graph, result) {
    temp[node]    = true;
    var neighbors = graph[node];
    for (var i = 0; i < neighbors.length; i ++) {
      var n = neighbors[i];
      if (temp[n]) {
        throw new Error('The graph is not a DAG');
      }
      if (!visited[n]) {
        topologicalSortRecursion(n, visited, temp, graph, result);
      }
    }
    temp[node]    = false;
    visited[node] = true;
    result.push(node);
  }
  for (var node in graph) {
    if (!visited[node] && !temp[node]) {
      topologicalSortRecursion(node, visited, temp, graph, result);
    }
  }
  return result.reverse();
};

/* Uncomment for testing
var graph = {
  'A' : ['B', 'C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : ['G', 'H'],
  'E' : [],
  'F' : ['I', 'J'],
  'G' : [],
  'H' : [],
  'I' : [],
  'J' : [],
};
topologicalSort(graph); 
*/
