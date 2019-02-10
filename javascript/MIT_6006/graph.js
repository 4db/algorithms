/*
 * Uunweighted, undirected graph function
 * Using array for storage verices and edges
 *
 * vertices - array
 * edges - array
 */
class Graph {
  constructor() {
    this.vertices      = [];
    this.edges         = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
  }

  addEdge(a, b) {
    this.edges[a].push(b);
    this.edges[b].push(a);
    this.numberOfEdges++;
  }

  removeEdge(a, b) {
    const index = this.edges[a] ? this.edges[a].indexOf(b) : -1;
    if (index !== -1) {
      this.edges[a].splice(index, 1);
      this.numberOfEdges--;
    }
    const index = this.edges[b] ? this.edges[b].indexOf(a) : -1;
    if (index !== -1) {
      this.edges[b].splice(index, 1);
    }
  }
}

