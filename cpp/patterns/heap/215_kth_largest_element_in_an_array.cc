class Solution {
public:
    /*
    Fasters.
    nth_element is a partial sorting algorithm that rearranges elements in [first, last) such that:

    The element pointed at by nth is changed to whatever element would occur in that position if [first, last) were sorted.
    All of the elements before this new nth element are less than or equal to the elements after the new nth element.
    */
    int findKthLargest(vector<int>& nums, int k) {
        std::nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), std::greater<int>());
        return nums[k - 1];
    }
    /*
      The complexity of partial_sort() is O(N*log K) where N is the number of elements 
      in array and K is the number of elements between middle and start. 
    */
    int findKthLargest(vector<int>& nums, int k) {
        std::partial_sort(nums.begin(), nums.begin() + k, nums.end(), greater<int>());
        return nums[k - 1];
    }

    // min-heap using priority_queue
    int findKthLargest(vector<int>& nums, int k) {
        // O(nlogk)
        // arguments:
        // - T - The type of the stored elements.
        // - Container	-	The type of the underlying container to use to store the elements. 
        // - A Compare type providing a strict weak ordering.
        std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
        
        for (int num : nums) {
            pq.push(num);
            // When the length of array is too large to be stored in priority_queue,
            // then limit the size of it to be K.
            if (pq.size() > k) {
                pq.pop();
            }
        }
        return pq.top();
    }
  
    //  PriorityQueue from a collection, even an unsorted one, is O(nlogk).
    int findKthLargest(vector<int>& nums, int k) {
        // O(n)
        std::priority_queue<int> pq(nums.begin(), nums.end());
        for (int i = 0; i < k - 1; i++) {
            // log(n)
            pq.pop();
        }
        // O(1)
        return pq.top();
    }
};
