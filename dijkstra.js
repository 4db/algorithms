function dijkstra(graph, start) {
  var solutions = {};
  solutions[start] = [];
  solutions[start].dist = 0;
  
  while (true) {
    var parent = null;
    var nearest = null;
    var dist = Infinity;

    //for each existing solution
    for (var n in solutions) {
      if (!solutions[n]) {
        continue
      }
      var ndist = solutions[n].dist;
      var adj = graph[n];
      //for each of its adjacent nodes...
      for (var a in adj) {
        //without a solution already...
        if (solutions[a]) {
          continue;
        }

        //choose nearest node with lowest *total* cost
        var d = adj[a] + ndist;
        if (d < dist) {
          //reference parent
          parent  = solutions[n];
          nearest = a;
          dist    = d;
        }
      }
    }
    
    //no more solutions
    if (dist === Infinity) {
        break;
    }
    
    //extend parent's solution path
    solutions[nearest] = parent.concat(nearest);
    //extend parent's cost
    solutions[nearest].dist = dist;
  }
  
  return solutions;
}

var graph = {
  "2":{"3":1,"4":1,"R":1},
  "3":{"2":1,"4":1,"6":1,"13":1},
  "4":{"2":1,"3":1,"5":1,"8":1},
  "5":{"4":1,"7":1,"11":1},
  "6":{"3":1,"13":1,"15":1},
  "7":{"5":1,"10":1},
  "8":{"4":1,"11":1,"13":1},
  "9":{"14":1},"10":{"7":1},
  "11":{"5":1,"8":1,"12":1},
  "12":{"11":1},
  "13":{"3":1,"6":1,"8":1,"14":1},
  "14":{"9":1,"13":1},
  "15":{"6":1},
  "R":{"2":1}
};

/*
Testing From 10
10 -> 2: 7 -> 5 -> 4 -> 2 distance: 4
10 -> 3: 7 -> 5 -> 4 -> 3 distance: 4
10 -> 4: 7 -> 5 -> 4 distance: 3
10 -> 5: 7 -> 5 distance: 2
10 -> 6: 7 -> 5 -> 4 -> 3 -> 6 distance: 5
10 -> 7: 7 distance: 1
10 -> 8: 7 -> 5 -> 4 -> 8 distance: 4
10 -> 9: 7 -> 5 -> 4 -> 3 -> 13 -> 14 -> 9 distance: 7
10 -> 10:  distance: 0
10 -> 11: 7 -> 5 -> 11 distance: 3
10 -> 12: 7 -> 5 -> 11 -> 12 distance: 4
10 -> 13: 7 -> 5 -> 4 -> 3 -> 13 distance: 5
10 -> 14: 7 -> 5 -> 4 -> 3 -> 13 -> 14 distance: 6
10 -> 15: 7 -> 5 -> 4 -> 3 -> 6 -> 15 distance: 6
10 -> R: 7 -> 5 -> 4 -> 2 -> R distance: 5
*/

var solutions = dijkstra(graph, 10);
for (var s in solutions) {
  if(!solutions[s]) continue;
  console.log(start + ' -> ' + solutions[s].join(" -> ") + "; distance: " + solutions[s].dist);
}
