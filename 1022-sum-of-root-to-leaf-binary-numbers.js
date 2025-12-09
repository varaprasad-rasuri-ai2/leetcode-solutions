var sumRootToLeaf = function (root) {
    let sum = 0;

    // Depth-first search to build binary numbers from root to leaf.
    function dfs(node, binStr) {
        if (!node) return; // null node → nothing to do

        // Append current node's value ('0' or '1') to the binary string
        const newStr = binStr + node.val;

        // If this is a leaf node, convert the full binary path to decimal
        if (!node.left && !node.right) {
            // parseInt(..., 2) converts binary → integer
            sum += parseInt(newStr, 2);
            return;
        }

        // Continue exploring children
        dfs(node.left, newStr);
        dfs(node.right, newStr);
    }

    // Start DFS with an empty string
    dfs(root, "");
    return sum;
};
