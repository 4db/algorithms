'use sctrict';

/*
 * Weighted graph
 * vertices - array
 * edges - array
 */
class Graph {

  constructor() {
    this.vertices = [];
    this.edges    = [];  
  }

  /**
   * @param {string|int} vertex
   */
  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  /**
   * @param {string|int} startVertex
   * @param {string|int} endVertex
   * @param {string|int} weight
   */
  addEdge(startVertex, endVertex, weight) {
    const edgeIndex = this.findEdge(startVertex, endVertex);
    if (edgeIndex !== false) {
      this.edges.splice(edgeIndex, 1);
    }
    this.edges.push(this.setEdge(startVertex,endVertex,weight));
  }

  /**
   * @param {[type]} startVertex
   * @param {[type]} endVertex
   * @param {[type]} weight
   * @return {object}
   */
  setEdge(startVertex, endVertex, weight) {
    return {
      'startVertex' : startVertex,
      'endVertex'   : endVertex,
      'weight'      : weight
    };
  }

  /**
   * @param  {[type]} startVertex
   * @param  {[type]} endVertex
   * @return {boolean|int}
   */
  findEdge(startVertex, endVertex) {
    for (let i = 0; i< this.edges.length; i++) {
      if ((this.edges[i].startVertex === startVertex && this.edges[i].endVertex === endVertex) ||
          (this.edges[i].endVertex === startVertex && this.edges[i].startVertex === endVertex)
      ) {
        return i;
      }
    }
    return false;
  }

  /**
   * @param  {string|int} startVertex
   * @param  {string|int} endVertex
   * @return {boolean}
   */
  removeEdge(startVertex, endVertex) {
    const index = this.findEdge(startVertex, endVertex);
    if (index === false) {
      return false;
    }
    this.edges.splice(index, 1);
    return true;
  }

  /**
   * @param  {[type]} vertex
   * @return {[type]}
   */
  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
    }
    for (let i = 0; i < this.vertices.length; i++) {
      this.removeEdge(this.vertices[i], vertex);
    }
  }

  /**
   * @param  {[type]} vertex
   * @return {[void]}
   */
  getVertexKey(vertex) {
    return this.vertices.indexOf(vertex);
  }
}

/**
 * @param  {[type]} graph
 * @param  {[type]} source
 * @return {object}
 */
function bellmanFord(graph, source) {
  const distances = {};
  const previousVertices = {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[source] = 0;
  graph.vertices.map(function(vertex){
    previousVertices[vertex] = null;
    if (vertex !== source) {
      distances[vertex] = Infinity;
    }
  });

  for (let vertex in distances) {
    for (let i = 0; i < graph.edges.length; i++) {
      if (graph.edges[i].startVertex == vertex || graph.edges[i].endVertex == vertex) {
        const neighbor = graph.edges[i].startVertex == vertex ? graph.edges[i].endVertex : graph.edges[i].startVertex;

        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distances[vertex];
        const distanceToNeighbor = distanceToVertex + graph.edges[i].weight;

        if (distanceToNeighbor < distances[neighbor]) {
          distances[neighbor] = distanceToNeighbor;
          previousVertices[neighbor] = vertex;
        }
      }
    }
  }
  return {distances, previousVertices};
}


(() => {
  console.log('Testing started: depth-first search traversal');
  const it = ((description, func) => {
    console.log(' => ' + description + ' => ' +  func());
  });

  /*
   * A - (1) --- B  - (5)- F
   * | \         |        /
   *(3) -(10)-  (2)   (1) 
   * |         \ |   /
   * C - (-2) -- D -
   */
  const graph = new Graph();
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

  it('#1 Test shortest path to F ', () => {
    const input    = 'A';
    const expect   = 2;
    const response = bellmanFord(graph, input).distances;

    if (expect === response.F) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });

  it('#2 Test path to C', () => {
    const input    = 'A';
    const expect   = -1;
    const response = bellmanFord(graph, input).distances;
    if (expect === response.C) {
      return 'PASSED';
    }
    return 'FAILED; EXPECT:' + expect + ' !== ' + response;
  });
})();
