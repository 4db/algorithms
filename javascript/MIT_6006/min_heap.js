function MinHeap() {
  const heap = [];
  const childIdxs = function(idx, res = {}) {
    res.right = (res.left = idx << 1) + 1, res;
  };

  const swap = function (idxA, idxB) {
    const temp = heap[idxA];
    heap[idxA] = heap[idxB];
    heap[idxB] = temp;
  };

  const smallestNode = function(idxs, res = {}) {
    res.idx = heap[idxs.left] > heap[idxs.right] ? idxs.right : idxs.left;
    res.val = heap[res.idx];
    return res;
  };

  const getSize = function() {
    return heap.length - 1;
  }

  const add = function(val) {
    var idx, parentIdx, parentVal;
    heap.push(Number(val));
    idx = getSize();
    parentIdx = idx >> 1;
    parentVal = heap[parentIdx];
    while (parentVal > val && parentIdx >= 1) {
      swap(parentIdx, idx);
      parentIdx = (idx = parentIdx) >> 1;
      parentVal = heap[parentIdx];
    }
  };

  const remove = function() {
    if (getSize()) {
        let lastVal = heap.pop();
        const first = heap[1];
        if (getSize() > 0) {
            let lastIdx = 1;
            const indices = childIdxs(lastIdx);
            const smallest = smallestNode(indices);
            heap[1] = lastVal;
            while (lastVal > smallest.val) {
                swap(lastIdx, smallest.idx);
                lastIdx = smallest.idx;
                smallestNode(childIdxs(lastIdx, indices), smallest);
            }
        }
        return first;
    }
  };

  const getFirst = function() {
    return heap[1];
  };

  const getSize = function() {
    return heap.length - 1;
  };
}