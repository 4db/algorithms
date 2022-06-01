// Leetcode 203. Remove Linked List Elements.
// TODO: Add "delete" to avoid memory leaks.
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
    ListNode* removeElements(ListNode* head, int val) {
        ListNode *curr = head;
        ListNode *prev = NULL;
        
        while (head) {
            if (head->val == val) {
                if (prev == NULL) {
                    curr = curr->next;
                }
                else {
                    prev->next = head->next;
                }
            }
            else {
                prev = head;
            }
            head = head->next;
        }
        return curr;
    }
};
