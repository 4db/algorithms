/*
 * Java Stack implementation with MAX memory size
 */
class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX];

    boolean isEmpty() {
        return (top < 0);
    }

    Stack() {
        top = -1; 
    }
  
    boolean push(int x) {
        System.out.println(x + " pushed into stack"); 
        if (top >= (MAX-1)) {
            System.out.println("Stack Overflow"); 
            return false; 
        }
        a[++top] = x;
        return true;
    }

    int pop() {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        int x = a[top--];
        return x;
    }
}