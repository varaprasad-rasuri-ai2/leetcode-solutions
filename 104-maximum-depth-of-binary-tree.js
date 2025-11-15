var maxDepth = function (root) {
    // Variable to track the maximum depth found so far
    let maxd = 0;

    // DFS helper function that carries the current depth
    function dfs(n, depth) {
        // If the node is null, stop recursion
        if (!n) return;

        // Update the maximum depth if this node is deeper
        maxd = Math.max(maxd, depth);

        // Recurse into the left subtree, increasing depth by 1
        dfs(n.left, depth + 1);

        // Recurse into the right subtree, increasing depth by 1
        dfs(n.right, depth + 1);
    }

    // Start DFS from the root at depth 1
    dfs(root, 1);

    // Return the maximum depth found
    return maxd;
};
