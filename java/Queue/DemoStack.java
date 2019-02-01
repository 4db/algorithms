public class DemoStack {
   private int maxSize;
   private long[] stackArray;
   private int top;
   
   public DemoStack(int s) {
      maxSize = s;
      stackArray = new long[maxSize];
      top = -1;
   }

   public void push(long j) {
      stackArray[++top] = j;
   }

   public long pop() {
      return stackArray[top--];
   }

   public long peek() {
      return stackArray[top];
   }

   public boolean isEmpty() {
      return (top == -1);
   }

   public boolean isFull() {
      return (top == maxSize - 1);
   }
   public static void main(String[] args) {
      DemoStack theStack = new DemoStack(10); 
      theStack.push(1);
      theStack.push(2);
      theStack.push(3);
      theStack.push(4);
      theStack.push(5);
      
      while (!theStack.isEmpty()) {
         long value = theStack.pop();
         System.out.print(value);
         System.out.print(" ");
      }
      System.out.println("");
   }
}