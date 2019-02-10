// heappop - pop and return the smallest element from heap
// heappush - push the value item onto the heap, maintaining
//             heap invarient
//heapify - transform list into heap, in place, in linear time
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  parent(i) {
    return (i-1)/2;
  }
  
  insertKey(key) {
    this.heappush(k)
  }
}
