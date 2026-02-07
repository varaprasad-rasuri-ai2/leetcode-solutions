var kthSmallest = function (root, k) {
    // Will hold the result once the k-th smallest value is found
    let kthSmallestVal = -1;

    // In-order DFS traversal (Left → Node → Right)
    // In a BST, this visits nodes in ascending sorted order
    function dfs(n) {
        if (!n) return;

        // Traverse left subtree first
        dfs(n.left);

        // Visit current node:
        // decrement k each time we visit a node in sorted order
        --k;

        // When k reaches 0, we've found the k-th smallest element
        if (k === 0) {
            kthSmallestVal = n.val;
            return; // early exit from this branch
        }

        // Traverse right subtree
        dfs(n.right);
    }

    
    dfs(root);

    return kthSmallestVal;
};
