var preorderTraversal = function (root) {
    // Array to store the preorder traversal result
    let vals = [];

    // Depth-first search helper function
    function dfs(n) {
        // Base case: if node is null, stop recursion
        if (!n) return;

        // Preorder: visit the node first
        vals.push(n.val);

        // Then recurse into the left subtree
        dfs(n.left);

        // And then the right subtree
        dfs(n.right);
    }

    // Start DFS from the root node
    dfs(root);

    // Return all collected values in preorder
    return vals;
};
