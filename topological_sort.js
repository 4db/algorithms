/*
 * Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, 
 * vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.
 *
 * A DAG G has at least one vertex with in-degree 0 and one vertex with out-degree 0
 * @param {object} graph
 * @return {array} sorted Array || Exception Error
 */
function topologicalSort(graph) {
  const result  = [];
  const visited = [];
  const temp    = [];

  const topologicalSortRecursion = function(node, visited, temp, graph, result) {
    temp[node]    = true;
    const neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i ++) {
      const n = neighbors[i];
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
  for (let node in graph) {
    if (!visited[node] && !temp[node]) {
      topologicalSortRecursion(node, visited, temp, graph, result);
    }
  }
  return result.reverse();
};

(() => {
  console.log('Testing started: topological sort');
  const it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
  });

  it('#1 Test correct graph', () => {
    //      A
    //    /  \
    //   B    C
    //  / \    \
    // D   E   F 
    /// \     / \
    //G H    I   J
    const adjacencyMatrix = {
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
    const expect   = ["A", "C", "F", "J", "I", "B", "E", "D", "H", "G"];
    const response = topologicalSort(adjacencyMatrix);

    if (JSON.stringify(response) == JSON.stringify(['A', 'C', 'F', 'J', 'I', 'B', 'E', 'D', 'H', 'G'])) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test not a DAG graph (With Cycle)', () => {
    //      A -\
    //    /  \  \
    //   B    C  \
    //  / \    \  \
    // D   E   F   \ 
    /// \     / \   \
    //G H    I   J -/
    const adjacencyMatrix = {
      'A' : ['B', 'C'],
      'B' : ['D', 'E'],
      'C' : ['F'],
      'D' : ['G', 'H'],
      'E' : [],
      'F' : ['I', 'J'],
      'G' : [],
      'H' : [],
      'I' : [],
      'J' : ['A'],
    };

    try {
      topologicalSort(adjacencyMatrix);
	  return 'FAILED; EXPECT error';
    }
    catch(error) {
      return 'PASSED';
    }
  });
})();
