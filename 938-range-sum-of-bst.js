var rangeSumBST = function (root, low, high) {
    // Variable to accumulate the sum of nodes within the range
    let sum = 0;

    // Depth-first search helper
    var dfs = function (n) {
        // Base case: if the node is null, stop
        if (!n) return;

        // If the node's value is within the [low, high] range,
        // add it to the running total
        if (low <= n.val && n.val <= high) {
            sum += n.val;
        }

        // Because it's a BST:
        // If the node's value is greater than `low`,
        // then its left subtree *might* contain valid values
        if (low < n.val) {
            dfs(n.left);
        }

        // If the node's value is less than `high`,
        // then its right subtree *might* contain valid values
        if (n.val < high) {
            dfs(n.right);
        }
    };

    // Start DFS from the root
    dfs(root);

    
    // Return the total sum of values within the range
    return sum;
};
