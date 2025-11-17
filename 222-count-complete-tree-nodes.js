var countNodes = function (root) {
    // Initialize a counter to track the number of nodes in the tree
    let count = 0;

    // Depth-first search helper function
    function dfs(node) {
        // If the current node is null, stop exploring this path
        if (!node) return;

        // Count the current node
        count++;

        // Recursively explore the left subtree
        dfs(node.left);

        // Recursively explore the right subtree
        dfs(node.right);
    }

    // Start DFS traversal from the root
    dfs(root);

    // Return the total number of nodes found
    return count;
};
