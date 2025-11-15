var sumOfLeftLeaves = function (root) {
    // Will accumulate the total value of all left leaves
    let sum = 0;

    // DFS helper: n = current node, p = parent node
    function dfs(n, p) {
        // If the current node doesn't exist, stop recursion
        if (!n) return;

        // Check if the current node is a leaf (no children)
        if (!n.left && !n.right) {
            // If this leaf is the left child of its parent, add its value
            if (n === p?.left) {
                sum += n.val;
            }
        }

        // Recurse down the left subtree
        dfs(n.left, n);

        // Recurse down the right subtree
        dfs(n.right, n);
    }

    // Start DFS with the root; it has no parent, so pass null
    dfs(root, null);

    // Return the total sum of all left-leaf values
    return sum;
};
