/*
 * Based on 
 * - http://www.cs.cornell.edu/courses/cs312/2007sp/lectures/lec25.html
 * - https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript
 */

const topPeek = 0;

/*
 * @param {number} i
 * @return {number}
 */
function parent(i) {
  return ((i + 1) >>> 1) - 1;
}

/*
 * @param {number} i
 * @return {number}
 */
function left(i) {
  return (i << 1) + 1; 
}

/*
 * @param {number} i
 * @return {number}
 */
function right(i) {
  return (i + 1) << 1;
}

class PriorityQueue {

  
 /*
  * @param {function} comparator
  */
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }
  
  isEmpty() {
    return this.size() == 0;
  }
  
  peek() {
    return this._heap[topPeek];
  }
  
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > topPeek) {
      this._swap(topPeek, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  
  replace(value) {
    const replacedValue = this.peek();
    this._heap[topPeek] = value;
    this._siftDown();
    return replacedValue;
  }
  
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  
  _siftUp() {
    let node = this.size() - 1;
    while (node > topPeek && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  
  _siftDown() {
    let node = topPeek;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

const queue = new PriorityQueue();
queue.push(10, 20, 30, 40, 50);
console.log('It should return topPeek of PriorityQueue -  50:', queue.peek() === 50 ? 'PASS' : 'FAIL');
console.log('It should return Size of PriorityQueue - 5:', queue.size() === 5 ? 'PASS' : 'FAIL');

let i = 50;
while (!queue.isEmpty()) {
  console.log('It should return PriorityQueue value', i, queue.pop() === i ? 'PASS' : 'FAIL');
  i = i - 10;
}

const desc = 'Pairwise comparison semantics';
const pairwiseQueue = new PriorityQueue((a, b) => a[1] > b[1]);
pairwiseQueue.push(['low', 0], ['medium', 5], ['high', 10]);
console.log(desc, ' should return high', pairwiseQueue.pop()[0] === 'high' ? 'PASS' : 'FAIL');
console.log(desc, ' should return medium', pairwiseQueue.pop()[0] === 'medium' ? 'PASS' : 'FAIL');
console.log(desc, ' should return low', pairwiseQueue.pop()[0] === 'low' ? 'PASS' : 'FAIL');
