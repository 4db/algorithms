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

    vm.searchNodeAt = function(position) {
        var currentNode = vm.head;
        var count       = 1;

        // 1st use-case: an invalid position
        if (vm._length === 0 || position < 1 || position > vm._length) {
            throw new Error('Failure: non-existent node in this list');
        }

        // 2nd use-case: a valid position
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    vm.remote = function(position) {
        var currentNode = vm.head;
        var count       = 0;
        var beforeNodeToDelete = null;
        var nodeToDelete       = null;
        var deletedNode        = null;

        // 1st use-case: an invalid position
        if (position < 0 || position > vm.length) {
            throw new Error('Failure: non-existent node in this list.');
        }

        // 2nd use-case: the first node is removed
        if (position === 1) {
            vm.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            vm._length--;
            return deletedNode;
        }

        // 3rd use-case: any other node is removed
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete       = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode             = nodeToDelete;
        nodeToDelete            = null;
        vm._length--;
     
        return deletedNode;
    }
}

var list = new SinglyList();
list.add('hello - 1');
list.add('hello - 2');
list.add('hello - 3');
list.add('hello - 4');
list.add('hello - 5');
console.log(list.searchNodeAt(3), ' Search - 3');

console.log(list.remote(3), 'Removed - 3  ');

console.log(list.searchNodeAt(3), ' Search - 3');
