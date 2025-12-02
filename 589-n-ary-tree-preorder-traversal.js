var preorder = function (root) {
    // Result array to store nodes in preorder order
    let res = [];

    // Depth-first search helper function
    function dfs(n) {
        // Base case: if the node is null, stop
        if (!n) return;

        // Visit the current node (preorder = root first)
        res.push(n.val);

        // Recursively visit each child in order
        for (let child of n.children) {
            dfs(child);
        }
    }

    // Start the DFS from the root node
    dfs(root);

    // Return the preorder traversal result
    return res;
};
