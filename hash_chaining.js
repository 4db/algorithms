function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    var vm     = this;
    vm._length = 0;
    vm.head    = null;

    vm.add     = function(value) {
        var node        = new Node(value);
        var currentNode = vm.head;

        // 1st use-case: an empty list
        if (!currentNode) {
            vm.head = node;
            vm._length++;
            return node;
        }

        // 2nd use-case: a non-empty list
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        vm._length++;
        return node;
    };
}

function hashTable() {
    var vm = this;
    vm.list = [];
    vm.chaining = false;

    vm.hashCode = function(str) {
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
        }
        if (vm.chaining === true) {
          return vm.divide(hash);
        }
        return hash;
    };


    vm.divide = function(int) {
        int = Math.round(int / 2);
        return int > 10 ? vm.divide(int) : int;
    };

    vm.get = function(x) {
        var i = vm.hashCode(x);
        if (vm.list[i]) {
            var currentNode = vm.list[i].head;
            while(currentNode) {
                if (currentNode && currentNode.data.x === x) {
                    return currentNode.data;
                }
                currentNode = currentNode.next;
            }
        };
        return undefined;
    };

    vm.set = function(x, y) {
        var i = vm.hashCode(x);
        if (!vm.list[i]) {
            vm.list[i] = new SinglyList();
        }
        vm.list[i].add({x, y});
    }
}

var testSize = 2000000;

console.time('Generate a new hash collection => ' + testSize);
var hashTableObj = new hashTable();
for (var x = 0; x < testSize; x++) {
  hashTableObj.set(`element${x}`, x);
}
console.timeEnd('Generate a new hash collection => '+ testSize);
console.time('Get element 0');
var log = hashTableObj.get(`element${0}`);
console.timeEnd('Get element 0');
console.log('Element 0 => ', log);
console.time('I_DONT_EXIST');
hashTableObj.get('I_DONT_EXIST')
console.timeEnd('I_DONT_EXIST');


console.time('Generate a new hash collection with chaining => ' + testSize);
hashTableObj = null;
hashTableObj = new hashTable();
hashTableObj.chaining = true;
for (var x = 0; x < testSize; x++) {
  hashTableObj.set(`element${x}`, x);
}
console.timeEnd('Generate a new hash collection with chaining => ' + testSize);

console.time('Get element 0');
var log = hashTableObj.get(`element${0}`);
console.timeEnd('Get element 0');
console.log('Element 0 => ', log);

console.time('Get element 990999');
var log = hashTableObj.get(`element${990999}`);
console.timeEnd('Get element 990999');
console.log('Element 990999 => ', log);

console.time('I_DONT_EXIST');
hashTableObj.get('I_DONT_EXIST')
console.timeEnd('I_DONT_EXIST');
