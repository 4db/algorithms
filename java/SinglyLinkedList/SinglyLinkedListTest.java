import org.junit.Test;
import static org.junit.Assert.;

public class SinglyLinkedListTest {
 
    @Test
    public void testNewLinkedList(){
        SinglyLinkedList singly = new SinglyLinkedList();
        assertTrue(singly.isEmpty());
        assertEquals(0, singly.length());

        singly.append("test value");
        assertFalse(singly.isEmpty());
        assertEquals(1, singly.length());
    }
}