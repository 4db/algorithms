public class SinglyLinkedList {
    private Node head;

    public boolean isEmpty(){
        return length() == 0;
    }
 
    public void append(String data){
        if (head == null) {
            head = new Node(data);
            return;
        }
        tail().next = new Node(data);
    }
 
    private Node tail() {
        Node tail = head;

        while(tail.next != null) {
            tail = tail.next;
        }      
        return tail;
     
    }
 
    public int length() {
       int length = 0;
       Node current = head;

       while(current != null) {
           length ++;
           current = current.next;
       }
       return length;
    }
}
