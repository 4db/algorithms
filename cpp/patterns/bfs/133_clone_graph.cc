/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/
class Solution {
public:
    // declaring map, to check whether we have a copy
    // of node or not and also to store copy.
    unordered_map<Node* , Node*> mp; 
    
    Node* cloneGraph(Node* node) {
        if(node == NULL) {
            return NULL;
        }
        
        Node* first = new Node(node -> val, {}); // make a copy of first node
        mp[node] = first;
        
        queue<Node*> q; //For bfs, we create queue
        q.push(node); // push into queue
        
        // until q. empty == false
        while(q.empty() == false) {
            Node* curr = q.front(); // extract front node
            q.pop(); // pop that from queue
            
            // now travel in adjcant
            for(auto adj: curr -> neighbors) {
                // if not present in map.
                if(mp.find(adj) == mp.end()) {
                    mp[adj] = new Node(adj -> val, {}); // then create copy.
                    q.push(adj); // push nto the queue
                    
                }
                // in current node push adjcant node.
                mp[curr] -> neighbors.push_back(mp[adj]); 
            }
        }
        
        return mp[node];
    }
};
