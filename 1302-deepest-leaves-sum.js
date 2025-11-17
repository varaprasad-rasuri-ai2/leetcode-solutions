var deepestLeavesSum = function (root) {
    // Stores sums of leaf values for each depth level
    const levelSumObj = {};

    // Tracks the deepest level encountered so far
    let deepestLevel = 0;

    // DFS helper that tracks current depth
    function dfs(node, level) {
        if (!node) return;

        // If this is a leaf node
        if (!node.left && !node.right) {
            // Update deepest level reached
            deepestLevel = Math.max(deepestLevel, level);

            // Add leaf value to the sum for this level
            levelSumObj[level] = (levelSumObj[level] || 0) + node.val;

            return;
        }

        // Continue searching deeper down the tree
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    // Start DFS traversal at level 0
    dfs(root, 0);

    // Return the sum for the deepest level (or -Infinity if none exists)
    return levelSumObj[deepestLevel] ?? -Infinity;
};
