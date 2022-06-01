Leetcode 83. Remove Duplicates from Sorted List.
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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* cur = head;
        while(cur && cur->next) {
            if(cur->val == cur->next->val) {
                ListNode* temp = cur->next;
                cur->next = temp->next;
                // No memory leaks.
                delete temp;
            }
            else {
                cur = cur->next;
            }
        }
        
        return head;
    }
};
