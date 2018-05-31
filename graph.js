/*
 * Uunweighted, undirected graph
 * vertices - array
 * edges - array
 */
function Graph() {
  var vm           = this;
  vm.vertices      = [];
  vm.edges         = [];
  vm.numberOfEdges = 0;

  vm.addVertex = function(vertex) {
    vm.vertices.push(vertex);
    vm.edges[vertex] = [];
  };

  vm.removeVertex = function(vertex) {
    var index = vm.vertices.indexOf(vertex);
    if (index !== -1) {
      vm.vertices.splice(index, 1);
    }
    while (vm.edges[vertex].length) {
      var adjacentVertex = vm.edges[vertex].pop();
      vm.removeEdge(adjacentVertex, vertex);
    }
  };

  vm.addEdge = function(a, b) {
    vm.edges[a].push(b);
    vm.edges[b].push(a);
    vm.numberOfEdges++;
  };

  vm.removeEdge = function(a, b) {
    var index = vm.edges[a] ? vm.edges[a].indexOf(b) : -1;
    if (index !== -1) {
      vm.edges[a].splice(index, 1);
      vm.numberOfEdges--;
    }
    var index = vm.edges[b] ? vm.edges[b].indexOf(a) : -1;
    if (index !== -1) {
      vm.edges[b].splice(index, 1);
    }
  };
}


/* Uncomment for testing
var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

// 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
console.log(graph); 

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);

// 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
console.log(graph); 

graph.removeEdge(1, 2);
graph.removeEdge(4, 5);
graph.removeEdge(10, 11);
graph.addEdge(1, 2);
graph.addEdge(4, 5);
graph.removeVertex(5);
// Size 5, relations 4
console.log(graph);
*/
