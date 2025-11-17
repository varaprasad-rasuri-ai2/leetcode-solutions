var hasPathSum = function (root, targetSum) {

    // Depth-first search to check if any root-to-leaf path sums to targetSum
    function dfs(node, prevSum) {
        // If the current node is null, no valid path exists here
        if (!node) return false;

        // If this is a leaf node (no children)
        if (!node.left && !node.right) {
            // Check whether the sum from root to this leaf equals targetSum
            return (prevSum + node.val) === targetSum;
        }

        // Continue exploring: pass the new running sum downward.
        // Return true if either left or right subtree contains a valid path.
        return (
            dfs(node.left, prevSum + node.val) ||
            dfs(node.right, prevSum + node.val)
        );
    }

    // Start DFS from the root with initial sum of 0
    return dfs(root, 0);
};
