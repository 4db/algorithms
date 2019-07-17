/**
 * 133. Clone Graph
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph. Each node in the graph contains
 * a val (int) and a list (List[Node]) of its neighbors.
 * Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 *
 * @param {Node} node
 * @return {Node}
 */
function UndirectedGraphNode(v, n = []) {
  this.val = v;
  this.neighbors = n;
}

// use queue and breadth first search
function cloneGraph(graph) {
  if (graph === null) {
    return graph;
  }

  const queue = [graph];

  // make initial copy
  const rootCopy = new UndirectedGraphNode(graph.val);
  const mapping = {};
  mapping[graph.val] = rootCopy;

  while (queue.length > 0) {
    let currNode = queue.shift();

    currNode.neighbors.forEach((neighbor) => {
      if (!mapping[neighbor.val]) {
        let newNode = new UndirectedGraphNode(neighbor.val);
        mapping[neighbor.val] = newNode;
        queue.push(neighbor);
      }

      mapping[currNode.val].neighbors.push(mapping[neighbor.val]);
    });
  }

  return rootCopy;
};
