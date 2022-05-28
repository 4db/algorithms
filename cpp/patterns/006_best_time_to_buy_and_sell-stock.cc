// Letcode 
// You are given an array prices where prices[i] is the price of a given stock on the ith day. Return the maximum profit.
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy = INT_MAX;
        int max_profit = 0;
        for (int price : prices) {
          buy = buy < price ? buy : price;
          const int profit = price - buy;
          max_profit = max_profit > profit ? sell : profit;
        }
        return max_profit;
    }
};
