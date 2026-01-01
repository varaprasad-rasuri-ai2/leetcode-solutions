var deleteNode = function (root, targetVal) {

    // Recursive DFS helper
    function dfs(n) {
        // Base case: empty subtree
        if (!n) return n;

        // If target is smaller, go left
        if (n.val > targetVal) {
            n.left = dfs(n.left);
            return n;
        }

        // If target is larger, go right
        if (n.val < targetVal) {
            n.right = dfs(n.right);
            return n;
        }

        // === Found the node to delete ===

        // Case 1: no right child → replace node with left subtree
        if (!n.right) return n.left;

        // Case 2: no left child → replace node with right subtree
        if (!n.left) return n.right;

        // Case 3: two children
        // Find inorder successor (smallest node in right subtree)
        let inorderSuccessor = n.right;
        while (inorderSuccessor.left) {
            inorderSuccessor = inorderSuccessor.left;
        }

        // Attach left subtree to successor
        inorderSuccessor.left = n.left;

        // Return right subtree as new root
        return n.right;
    }

    return dfs(root);
};
