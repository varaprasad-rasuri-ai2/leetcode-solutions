var convertBST = function (root) {
    // This variable keeps track of the running sum of visited nodes
    // (sum of all node values greater than the current one)
    let sum = 0;

    // Depth-first search helper function
    var dfs = function (n) {
        // Base case: if the node is null, stop recursion
        if (!n) return;

        // Traverse the right subtree first (larger values in a BST)
        dfs(n.right);

        // Update the current node's value by adding the accumulated sum
        n.val += sum;

        // Update the running sum with the new value of the current node
        sum = n.val;

        // Traverse the left subtree (smaller values)
        dfs(n.left);
    };

    // Start the DFS traversal from the root
    dfs(root);

    // Return the transformed Greater Tree
    return root;
};

