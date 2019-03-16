/**
 * 743. Network Delay Time
 * There are N network nodes, labelled 1 to N.
 * Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node,
 * v is the target node, and w is the time it takes for a signal to travel from source to target.
 * Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal?
 * If it is impossible, return -1.
 **/

/*
 * @param {void} val
 */
function Node(val) {
  this.val = val;
  this.next = [];
  this.time = Infinity;
}

/*
 * @param {array} list
 * @return {element}
 */
function popSmallestTime(list) {
  list.sort((a, b) => a.time - b.time);
  return list.shift();
}

/*
 * @param {number} numNodes
 * @param {number[][]} edges
 * @return {graph}
 */
function createGraph(numNodes, edges) {
  const nodes = {};

  for(var i = 1; i <= numNodes; i++) {
    nodes[i] = new Node(i);
  }

  edges.forEach(([u, v, w]) => {
    nodes[u].next.push([nodes[v], w]);
  });

  return nodes;
}

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
function networkDelayTime(times, N, K) {
  // Run djikstra and keep track of the max time as we visit a node
  const nodes = createGraph(N, times);
  const unvisited = Object.values(nodes);
  nodes[K].time = 0;
  let maxTime = 0;

  while (unvisited.length) {
    const node = popSmallestTime(unvisited); 
    maxTime = node.time;
    node.next.forEach(([next, weight]) => {
      if ((node.time + weight) < next.time) {
          next.time = node.time + weight;
      }
    });
  }

  // if the max time is Infinity it means that node wasn't visited at all from the source
  return maxTime === Infinity ? -1 : maxTime;
}

console.log('It should return 2', networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) === 2 ? 'PASS' : 'FAIL');
