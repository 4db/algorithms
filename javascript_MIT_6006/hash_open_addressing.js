function HashTable() {
  var vm = this;
  vm._bucketSize = 10;
  vm._buckets = [];
  vm._buckets.length = vm._bucketSize;

  /* Simple hash code function(Convert to 32bit integer)
   * Recomended used SHA-1 or SHA-2
   */
  vm.hashCode = function(str) {
    var hash = 0, i, chr;
    if (str.length === 0) {
      return hash;
    }
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash % vm._bucketSize
  };

  vm.get = function(key) {
    var hash = vm.hashCode(key);
      if (!vm._buckets[hash]) {
      return undefined;
    }
    if (vm._buckets[hash].hasOwnProperty(key)) {
      return vm._buckets[hash][key];
    }
    var bucketId = hash + 1;
    while (bucketId != hash) {
      if (bucketId >= vm._bucketSize) {
        bucketId = 0;
      }
      if (vm._buckets[bucketId] === undefined) {
        return undefined;
      }
      if (vm._buckets[bucketId].hasOwnProperty(key)) {
        return vm._buckets[hash][key];
      }
      bucketId++;
    };
    return undefined;
  };

  vm.put = function(key, value) {
    var hash = vm.hashCode(key);
    if (!vm._buckets[hash]) {
      vm._buckets[hash] = {};
      vm._buckets[hash][key] = value;
      return;
    }
    if (vm._buckets[hash].hasOwnProperty(key)) {
      throw 'Duplicate not allowed';
    }

    var bucketId = hash + 1;
    while (bucketId !== hash) {
      if (bucketId >= vm._bucketSize) {
        bucketId = 0;
      }
      if (!vm._buckets[bucketId]) {
        vm._buckets[bucketId] = {};
        vm._buckets[bucketId][key] = value;
        return;
      }
      bucketId++;
    }
    throw 'HashTable is full, a rehash is needed';
  };
}
var hashTableObj = new HashTable();
for (var i = 0; i < 100; i++) {
hashTableObj.put(`element${i}`, i);
}
console.log(hashTableObj);
