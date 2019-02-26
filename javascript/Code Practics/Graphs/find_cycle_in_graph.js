/*
 * Find cycle in Graph
 * Graph represent as adjacency Matrix
 *
 * @param object graph
 * @return array
 */
function findCycle(graph) {
    let queue = Object.keys(graph).map( node => [node] );
    while (queue.length) {
        const visited = [];
        for (const path of queue) {
            const parents = graph[path[0]] || [];
            for (const node of parents) {
                if (node === path[path.length-1]) return [node, ...path];
                visited.push([node, ...path]);
            }
        }
        queue = visited;
    }
  return [];
}
var graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D'],
  'D': ['E', 'F'],
  'E': ['G', 'A'],
  'F': ['G'],
  'G': ['H', 'I'],
  'H': ['J'],
  'I': ['J'],
  'J': ['K', 'L'],
  'K': ['M'],
  'L': ['M'],
  'M': []
};
console.log('It should find a cycle in Direct Graph. Result:', getCycle(graph),  getCycle(graph).length > 0 ? 'PASS' : 'FAIL');
