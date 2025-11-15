var inorderTraversal = function (root) {
    // Array to collect inorder traversal values
    let vals = [];

    // Recursive DFS helper function
    function dfs(n) {
        // If the node is null, stop recursion
        if (!n) return;

        // Inorder step 1: traverse the left subtree
        dfs(n.left);

        // Inorder step 2: visit the current node
        vals.push(n.val);

        // Inorder step 3: traverse the right subtree
        dfs(n.right);
    }

    // Start traversal from the root
    dfs(root);

    // Return collected inorder values
    return vals;
};
