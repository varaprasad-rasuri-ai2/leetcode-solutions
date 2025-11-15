var minDepth = function (root) {
    // Track the smallest depth found; start with Infinity so any real depth is smaller
    let mind = Infinity;

    // DFS helper that carries the current depth
    function dfs(n, depth) {
        // If the node is null, stop recursion
        if (!n) return;

        // If this node is a leaf (no children), update the minimum depth
        if (!n.left && !n.right) {
            mind = Math.min(mind, depth);
        }

        // Recurse into left subtree
        dfs(n.left, depth + 1);

        // Recurse into right subtree
        dfs(n.right, depth + 1);
    }

    // Start DFS from the root, depth = 1
    dfs(root, 1);

    // If the tree was empty (root = null), return 0; otherwise return the minimum depth found
    return mind === Infinity ? 0 : mind;
};
