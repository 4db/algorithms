// 332. Reconstruct Itinerary
// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], 
// reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. 
// Thus, the itinerary must begin with JFK.

const dfs = (source, graph, length, path = []) => {
  if (path.length === length) {
    return path.concat(source);
  }
  let neighbours = graph[source] || [];

  for (let neighbourKey in neighbours) {
    const neighbour = neighbours[neighbourKey];
    let newList = neighbours.slice();
    newList.splice(neighbours.indexOf(neighbour), 1);
    graph[source] = newList;
    const result = dfs(neighbour, graph, length, path.concat(source));
    if (result.length) {
      return result;
    }
    graph[source] = newList.concat(neighbour);
  }

  return [];
};

const constructGraph = tickets => {
  const graph = tickets.reduce((graph, ticket) => {
    const [from, to] = ticket;
    const neighbours = graph[from] || [];
    graph[from] = neighbours.concat(to);
    return graph;
  }, {});

  for (let source in graph) {
    const destinations = graph[source];
    destinations.sort();
  }
  return graph;
};
const findItinerary = tickets => {
  const graph = constructGraph(tickets);
  const path = dfs("JFK", graph, tickets.length, []);
  if (path) {
    return path;
  }
};
