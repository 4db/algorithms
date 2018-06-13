/*
 * Weighted graph
 * vertices - array
 * edges - array
 */
function Graph() {
  var vm           = this;
  vm.vertices      = [];
  vm.edges         = [];

  vm.addVertex = function(vertex) {
    vm.vertices.push(vertex);
  };

  vm.addEdge = function(startVertex, endVertex, weight) {
    var edgeIndex = vm.findEdge(startVertex, endVertex);
    if (edgeIndex !== false) {
      vm.edges.splice(edgeIndex, 1);
    }
    vm.edges.push(vm.setEdge(startVertex,endVertex,weight));
  };

  vm.setEdge = function(startVertex, endVertex, weight) {
    return {
      'startVertex' : startVertex,
      'endVertex'   : endVertex,
      'weight'      : weight
    };
  }

  vm.findEdge = function(startVertex, endVertex) {
    for (var i = 0; i< vm.edges.length; i++) {
      if (
          (vm.edges[i].startVertex === startVertex && vm.edges[i].endVertex === endVertex) ||
          (vm.edges[i].endVertex === startVertex && vm.edges[i].startVertex === endVertex)
      ) {
        return i;
      }
    }
    return false;
  }

  vm.removeEdge = function(startVertex, endVertex) {
    var index = vm.findEdge(startVertex, endVertex);
    if (index === false) {
      console.log('Edge with vertexs(' + startVertex + ', ' + endVertex + ') not found');
      return false;
    }
    vm.edges.splice(index, 1);
  };

  vm.removeVertex = function(vertex) {
    var index = vm.vertices.indexOf(vertex);
    if (index !== -1) {
      vm.vertices.splice(index, 1);
    }
    for (var i = 0; i < vm.vertices.length; i++) {
      vm.removeEdge(vm.vertices[i], vertex);
    }
  };

  vm.getVertexKey = function(vertex) {
    return vm.vertices.indexOf(vertex);
  }
}

function bellmanFord(graph, startVertex) {
  var distances = {};
  var previousVertices = {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex] = 0;
  graph.vertices.map(function(vertex){
    previousVertices[vertex] = null;
    if (vertex !== startVertex) {
      distances[vertex] = Infinity;
    }
    });

  // We need (|V| - 1) iterations.
  //for (let iteration = 0; iteration < (graph.vertices.length - 1); iteration++) {
    // During each iteration go through all vertices.
    for (var vertex in distances) {
    //console.log('Go through all vertex edges.', vertex)
      // Go through all vertex edges.
      // TODO make edges Neighbors hash
      for (var i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].startVertex == vertex || graph.edges[i].endVertex == vertex) {
          var neighbor = graph.edges[i].startVertex == vertex ? graph.edges[i].endVertex : graph.edges[i].startVertex;
          //console.log('// Find out neighbor', neighbor)
          // Find out if the distance to the neighbor is shorter in this iteration
          // then in previous one.
          var distanceToVertex = distances[vertex];
          var distanceToNeighbor = distanceToVertex + graph.edges[i].weight;
          console.log(distanceToVertex, distanceToNeighbor, 'distanceToVertex, distanceToNeighbor')
          if (distanceToNeighbor < distances[neighbor]) {
          //console.log(distances)
            distances[neighbor] = distanceToNeighbor;
            previousVertices[neighbor] = vertex;
          }
        }
      }
    }
  
  return {distances, previousVertices};
}


var graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('F');

graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'D', 2);

graph.addEdge('A', 'D', 10);

graph.addEdge('A', 'C', 3);
graph.addEdge('C', 'D', -2);

graph.addEdge('B', 'F', 5);
graph.addEdge('D', 'F', 1);

console.log(graph);
/*
 * A - (1) --- B  - (5)- F
 * | \         |        /
 *(3) -(10)-  (2)   (1) 
 * |         \ |   /
 * C - (-2) -- D -
 */
bellmanFord(graph, 'A');
