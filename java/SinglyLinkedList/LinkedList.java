package src.LinkedList;

public class LinkedList {
    public Node head;
    public int listCount;

    public LinkedList() {
        head = new Node(0);
        listCount = 0;
    }

    public void show() {
        Node current = head;
        while (current.next != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println(current.data);
    }

    public boolean add(int value) {
        Node end = new Node(value);
        Node current = head;

        while (current.next != null) {
            current = current.next;
        }
        current.next = end;
        listCount++;
        System.out.println(value + " appended to tail!");
        return true;
    }

    public boolean add(int value, int index) {
        Node end = new Node(value);
        Node current = head;
        int jump;

        if (index > listCount || index < 1) {
            System.out.println("Add Failed: index out of bounds of size of linked list.");
            return false;
        }

        jump = 0;
        while (jump < index - 1) {
            current = current.next;
            jump++;
        }
        end.next = current.next;
        current.next = end;
        listCount++;
        System.out.println("Success! " + value + " added at index " + index);
        return true;
    }

    public boolean deleteNodeWithData(int value) {
        Node current = head;
        while (current.next != null) {
            if (current.next.data == value) {
                current.next = current.next.next;
                listCount--;
                System.out.println("Success! Node with data " + value + " deleted.");
                return true;
            }
            current = current.next;
        }
        System.out.println("Delete Failed: No node found with given data!");
        return false;
    }

    public boolean deleteNodeAtIndex(int index) {
        Node current = head;
        int jump;
        if (index > listCount || index < 1) {
            System.out.println("Delete Failed: index out of bounds of size of linked list");
            return false;
        }

        jump = 0;
        while (jump < index-1) {
            current = current.next;
            jump++;
        }

        current.next = current.next.next;
        System.out.println("Success! Node at index " + index + " deleted.");
        listCount--;
        return true;
    }

    public static void main(String[] args) {
        LinkedList linkedList = new LinkedList();
        linkedListadd(1);
        linkedListshow();
        linkedListadd(2);
        linkedListshow();
        linkedListadd(3);
        linkedListshow();
        linkedListdeleteNodeWithData(2);
        linkedListshow();
        linkedListdeleteNodeAtIndex(3);
        linkedListshow();
        linkedListdeleteNodeAtIndex(1);
        linkedListshow();
        // 1 appended to tail!
        // 0 -> 1
        // 2 appended to tail!
        // 0 -> 1 -> 2
        // 3 appended to tail!
        // 0 -> 1 -> 2 -> 3
        // Success! Node with data 2 deleted.
        // 0 -> 1 -> 3
        // Delete Failed: index out of bounds of size of linked list
        // 0 -> 1 -> 3
        // Success! Node at index 1 deleted.
        // 0 -> 3
    }
}