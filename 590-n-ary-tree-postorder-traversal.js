var postorder = function (root) {
    // Array to store the traversal result
    let res = [];

    // Depth-first search helper function
    function dfs(n) {
        // If the node is null, stop recursion
        if (!n) return;

        // Traverse all children first (left → right)
        for (let child of n.children) {
            dfs(child);
        }

        // After visiting all children, process the current node
        res.push(n.val);
    }

    // Start DFS from the root
    dfs(root);

    // Return the postorder traversal result
    return res;
};
