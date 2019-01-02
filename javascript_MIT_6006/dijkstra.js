/**
 * O(E+VlogV)
 * Using: Shortest Path for non-negative weight(DAG)
 *
 * Dijkstra algorithm implementation based on simplify priority Queue (Array + splice)
 * @param  {object} graph - Adjacency list
 * @param  {string} source
 * @return {object} - 'A' : {distance : 0, parent: 'None'}
 */
function dijkstra(graph, source) {
    const priorityQueueInsertOrUpdate = function(current) {
        for (var i = 0; i < priorityQueue.length; i++) {
            if (distance[current].distance > distance[priorityQueue[i]].distance) break;
        }
        priorityQueue.splice(i, 0, current);
    }

    const distance = {[source] : {distance : 0, parent: 'None'}};
    const priorityQueue = [source];

    while(priorityQueue.length) {
        const current = priorityQueue.shift();
        for (node in graph[current]) {
            const weigth = graph[current][node];
            if (!distance[node] || distance[node] > distance[current].distance + weigth) {
                distance[node] = {distance : distance[current].distance + weigth, parent: current};
                priorityQueueInsertOrUpdate(node);
            }
        }
    }
    return distance;
}

/*
 *@param {string} description
 *@param {function} func
 *@return {print result}
 */
function it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
});

//              A
//            /   \
//          1      1
//         /        \
//        B          C
//      /   \          \
//    1       1        10
//   /         \         \
//  D          E -- 1 -- F
const adjacencyMatrix = {
  'A' : {'B' : 1, 'C' : 1},
  'B' : {'D' : 1, 'E' : 1},
  'C' : {'F' : 10},
  'D' : {},
  'E' : {'F' : 1},
  'F' : {},
};

it('should find a source node', () => {
    const input    = 'A';
    const expect   = 'None';
    const response = dijkstra(adjacencyMatrix, input);
    console.log(response)
    if (expect === response[input].parent) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
});

it('should find a shortest path to F ', () => {
    const input    = 'A';
    const expect   = 3;
    const response = dijkstra(adjacencyMatrix, input);
    if (expect === response['F'].distance) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
});

it('should not find a shortest path of G', () => {
    const input    = 'A';
    const expect   = undefined;
    const response = dijkstra(adjacencyMatrix, input);
    if (expect === response['G']) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
});
