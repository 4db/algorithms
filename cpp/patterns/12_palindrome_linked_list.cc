// Leetcode 234. Palindrome Linked List.
// Given the head of a singly linked list, return true if it is a palindrome.
// Input: head = [1,2,2,1]
// Output: true
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        ListNode *fast = head;
        ListNode *slow = head;
        ListNode *pre = NULL;
        
        while (fast && fast->next) {	
        	fast = fast->next->next;
            // Reverse list magic.
        	ListNode *tmp = slow;
        	slow = slow->next;
        	tmp->next = pre;
        	pre = tmp;
        }
        if (fast != NULL) {
            slow = slow->next;
        }
        while (slow && pre) {
            if (slow->val != pre->val) {
                return false;
            }
            slow = slow->next;
            pre = pre->next;
        }
        return true;
    }
};
