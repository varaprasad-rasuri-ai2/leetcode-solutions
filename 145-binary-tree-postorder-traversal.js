var postorderTraversal = function (root) {
    // Array to store the postorder traversal result
    let vals = [];

    // Recursive depth-first search helper
    function dfs(n) {
        // If the node is null, stop recursion
        if (!n) return;

        // Postorder step 1: traverse the left subtree
        dfs(n.left);

        // Postorder step 2: traverse the right subtree
        dfs(n.right);

        // Postorder step 3: visit the current node
        vals.push(n.val);
    }

    // Start DFS from the root
    dfs(root);

    // Return all values collected in postorder
    return vals;
};
